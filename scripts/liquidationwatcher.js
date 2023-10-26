const hre = require("hardhat");
const { interval, retry, timeout, valueToBigNumber, readAllFiles, multicall } = require("./utils");
const { gql } = require("graphql-request");
const { execute } = require("../.graphclient");
const BigNumber = require("bignumber.js");
const { addresses, chainId } = require("./constants");
const fetch = require("node-fetch");

const PRICE_ORACLE_DECIMALS = new BigNumber(10).pow(8);
const RAY = new BigNumber(10).pow(27);

const minPriceUSD = parseFloat(process.env.MIN_PRICE);
const healthFactorLiquidate = 1;
const healthFactorThreshold = 0.95;     // Below this threshold the entire position is liquidated
const maxFailuresBeforeDrop = 10;
const maxDEXSlippage = 2;

const positionQuery = gql`
    query getActivePositions($limit: Int!, $offset: Int!) {
        _meta {
            block {
                number
            }
        }
        accounts(
            first: $limit,
            skip: $offset,
            orderBy: id,
            orderDirection: desc, 
            where: {borrows_: {amount_gt: "0"}}
        ) {
            id
            positions {
                balance,
                isCollateral
                side
                market {
                    liquidationThreshold
                    inputToken {
                        id
                    }
                }
            }
        }
    }
`;

async function fetchAllRows (query, resolver) {
    const rows = [];
    const limit = 1000;
    let offset = 0;
    let result = await execute(query, { limit, offset });
    const blockNumber = result.data._meta.block.number;
    for (const r of resolver(result.data)) rows.push(r);
    while (offset + limit === rows.length) {
        offset += limit;
        result = await execute(query, { limit, offset });
        for (const r of resolver(result.data)) rows.push(r);
    }
    return { rows, blockNumber };
}

function getLiquidationParams(position) {
    // Using logic from https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/libraries/logic/LiquidationLogic.sol#L466
    const collateral = position.largestSupplyReserve;
    const debt = position.largestBorrowReserve;

    let debtToCover = position.largestBorrowTokens;
    let collateralToLiquidate;
    if (position.healthFactor.isGreaterThan(healthFactorThreshold)) {
        debtToCover = debtToCover.div(2);
    }
    const baseCollateral = debt.latestPrice.multipliedBy(debtToCover).multipliedBy(collateral.unit)
        .div(collateral.latestPrice.multipliedBy(debt.unit));
    // FIXME this needs to take e-mode into account
    const maxCollateralToLiquidate = baseCollateral.multipliedBy(collateral.reserveLiquidationBonus).div(10000);

    if (maxCollateralToLiquidate.isGreaterThan(position.largestSupplyTokens)) {
        // Amount needed > amount available
        maxCollateralToLiquidate = position.largestSupplyTokens;
        debtToCover = collateral.latestPrice.multipliedBy(maxCollateralToLiquidate).multipliedBy(debt.unit)
            .div(debt.latestPrice.multipliedBy(collateral.unit))
            .multipliedBy(10000).div(collateral.reserveLiquidationBonus);
    } else {
        // There is enough collateral available
        collateralToLiquidate = maxCollateralToLiquidate;
    }

    return {
        collateralToLiquidate: collateralToLiquidate.div(1.01),     // FIXME - this should not be some hard coded number to make sure collateral we get back > DEX swap amount
        debtToCover
    };
}

class LiquidationWatcher {

    logger = (log) => {};
    unhealthyPositions = [];
    reserves = [];
    reservesLookup = {};
    emodeCategories = {};
    currencyInfo = {};

    constructor() {
    }

    async refreshReserves() {
        const uiPoolDataProviderV3 = await ethers.getContractAt("IUiPoolDataProviderV3", addresses.UI_POOL_DATA_PROVIDER);
        const aaveOracle = await ethers.getContractAt("IAaveOracle", addresses.AAVE_ORACLE);

        this.logger(`Refreshing reserves...`);
        const [reserveDataArray, currencyInfo] = await uiPoolDataProviderV3.getReservesData(addresses.LENDING_POOL_ADDRESS_PROVIDER);
        this.reserves = [];
        this.reservesLookup = {};
        this.currencyInfo = currencyInfo;
        const reservesText = [];
        reserveDataArray.forEach(_r => {
            const r = { ..._r };
            this.reservesLookup[r.underlyingAsset.toLowerCase()] = r;
            this.reserves.push(r);
            this.emodeCategories[r.eModeCategoryId] = {
                ltv: r.eModeLtv,
                liquidationThreshold: r.eModeLiquidationThreshold,
                liquidationBonus: r.eModeLiquidationBonus
            };
            reservesText.push(`${r.symbol}:${r.underlyingAsset}`);
        });
        this.logger(`Found: ${reservesText.join(', ')}`);

        this.logger(`Fetching latest oracle prices...`);
        const prices = await aaveOracle.getAssetsPrices(this.reserves.map(r => r.underlyingAsset));
        const priceText = [];
        this.reserves.forEach((r, i) => {
            const price = valueToBigNumber(prices[i]).div(PRICE_ORACLE_DECIMALS);
            r.latestPrice = price;
            r.unit = new BigNumber(10).pow(valueToBigNumber(r.decimals));
            r.reserveLiquidationBonus = valueToBigNumber(r.reserveLiquidationBonus);
            priceText.push(`${r.symbol} = ${price.toFixed(2)}`);
        });
        this.logger(`Prices: ${priceText.join(', ')}`);
    }

    async queryPositions() {
        const uiPoolDataProviderV3 = await ethers.getContractAt("IUiPoolDataProviderV3", addresses.UI_POOL_DATA_PROVIDER);

        // Fetch all positions
        this.logger(`Fetching all positions...`);
        const { rows, blockNumber } = (await fetchAllRows(positionQuery, r => r.accounts));
        let lowHF = BigNumber(0);
        let highHF = BigNumber(0);
        let averageHF = BigNumber(0);
        let averageHFCount = 0;
        let _unhealthyPositions = rows.filter(p => {
            if (
                p.positions.length == 0 ||
                !p.positions.some(_p => _p.side === 'BORROWER')
            ) return false;

            let totalBorrowed = BigNumber(0);
            let totalDesposited = BigNumber(0);
            let totalCollateralThreshold = BigNumber(0);
            let largestBorrowAmount = BigNumber(0);
            let largestBorrowTokens;
            let largestBorrowReserve;
            let largestSupplyAmount = BigNumber(0);
            let largestSupplyTokens;
            let largestSupplyReserve;

            p.positions.filter(_p => _p.side === 'BORROWER').forEach((b, i) => {
                const reserve = this.reservesLookup[b.market.inputToken.id.toLowerCase()];
                const borrowed = valueToBigNumber(b.balance);
                const borrowedUSD = borrowed.multipliedBy(reserve.latestPrice).div(reserve.unit);
                totalBorrowed = totalBorrowed.plus(borrowedUSD);

                if (borrowedUSD.isGreaterThan(largestBorrowAmount)) {
                    largestBorrowAmount = borrowedUSD;
                    largestBorrowTokens = borrowed;
                    largestBorrowReserve = reserve;
                }
            });
            p.positions.filter(_p => (_p.side === 'LENDER' || _p.side === 'COLLATERAL') && _p.isCollateral).forEach((d, i) => {
                const reserve = this.reservesLookup[d.market.inputToken.id.toLowerCase()];
                const deposited = valueToBigNumber(d.balance);
                const depositedUSD = deposited.multipliedBy(reserve.latestPrice).div(reserve.unit);
                const liquidationThreshold = valueToBigNumber(d.market.liquidationThreshold);
                totalDesposited = totalDesposited.plus(depositedUSD);
                totalCollateralThreshold = totalCollateralThreshold.plus(depositedUSD.multipliedBy(liquidationThreshold.div(100)));

                if (depositedUSD.isGreaterThan(largestSupplyAmount)) {
                    largestSupplyAmount = depositedUSD;
                    largestSupplyTokens = deposited;
                    largestSupplyReserve = reserve;
                }
            });
            
            let healthFactor = totalCollateralThreshold.div(totalBorrowed);
            p.totalDesposited = totalDesposited;
            p.totalBorrowed = totalBorrowed;
            p.largestBorrowAmount = largestBorrowAmount;
            p.largestBorrowTokens = largestBorrowTokens;
            p.largestBorrowReserve = largestBorrowReserve;
            p.largestSupplyAmount = largestSupplyAmount;
            p.largestSupplyTokens = largestSupplyTokens;
            p.largestSupplyReserve = largestSupplyReserve;
            p.healthFactor = healthFactor;
            
            // Ignore everything below $100
            if (largestBorrowAmount.isLessThan(minPriceUSD)) return false;

            // FIXME these dont take emode into account
            averageHF = averageHF.plus(healthFactor);
            averageHFCount++;
            if (healthFactor.isLessThan(lowHF) || lowHF.isEqualTo(0)) lowHF = healthFactor;
            if (healthFactor.isGreaterThan(highHF)) highHF = healthFactor;
            
            return healthFactor.isLessThan(healthFactorLiquidate);
        });

        // Any positions that are unhealthy double-check that they don't have emode activated and are actually safe
        const userReservesData = await multicall(_unhealthyPositions.map(p => {
            return [addresses.UI_POOL_DATA_PROVIDER, uiPoolDataProviderV3.interface.encodeFunctionData("getUserReservesData", [addresses.LENDING_POOL_ADDRESS_PROVIDER, p.id])];
        }), r => uiPoolDataProviderV3.interface.decodeFunctionResult("getUserReservesData", r));
        _unhealthyPositions = _unhealthyPositions.filter((p, i) => {
            const emodeCategory = userReservesData[i][1];
            const emodeData = this.emodeCategories[emodeCategory.toString()];
            if (emodeData != null) {
                const liquidationThreshold = valueToBigNumber(emodeData.liquidationThreshold);
                const healthFactor = p.totalDesposited.multipliedBy(liquidationThreshold.div(10000)).div(p.totalBorrowed);
                p.healthFactor = healthFactor;
                return healthFactor.isLessThan(healthFactorLiquidate);
            } else {
                return true;
            }
        });

        this.logger(`Found ${_unhealthyPositions.length}/${averageHFCount} unhealthy positions (>= $${minPriceUSD}). Low HF = ${lowHF.toFixed(2)}, Average HF = ${averageHF.div(averageHFCount).toFixed(2)},  High HF = ${highHF.toFixed(2)}`);

        return { _unhealthyPositions, blockNumber };
    }

    async readAllManualPositions() {
        let positions = (await readAllFiles("./data")).flatMap(f => {
            return Object.values(f);
        }).map(id => {
            return {
                id
            };
        });

        this.logger(`${positions.length} positions manually specified. Fetching data...`);

        const uiPoolDataProviderV3 = await ethers.getContractAt("IUiPoolDataProviderV3", addresses.UI_POOL_DATA_PROVIDER);
        const userReservesData = await multicall(positions.map(p => {
            return [addresses.UI_POOL_DATA_PROVIDER, uiPoolDataProviderV3.interface.encodeFunctionData("getUserReservesData", [addresses.LENDING_POOL_ADDRESS_PROVIDER, p.id])];
        }), r => uiPoolDataProviderV3.interface.decodeFunctionResult("getUserReservesData", r));
        
        positions = positions.filter((p, i) => {
            const userReserveData = userReservesData[i][0];
            const emodeCategory = userReservesData[i][1];
            const emodeData = this.emodeCategories[emodeCategory.toString()];

            let totalBorrowed = BigNumber(0);
            let totalCollateralThreshold = BigNumber(0);
            let largestBorrowAmount = BigNumber(0);
            let largestBorrowTokens;
            let largestBorrowReserve;
            let largestSupplyAmount = BigNumber(0);
            let largestSupplyTokens;
            let largestSupplyReserve;

            userReserveData.forEach(u => {
                const reserve = this.reservesLookup[u.underlyingAsset.toLowerCase()];
                const units = new BigNumber(10).pow(reserve.decimals.toString());

                const priceInMarketReferenceCurrency = valueToBigNumber(reserve.priceInMarketReferenceCurrency);
                const marketReferenceCurrencyUnit = valueToBigNumber(this.currencyInfo.marketReferenceCurrencyUnit);
                const scaledATokenBalance = valueToBigNumber(u.scaledATokenBalance);
                const scaledVariableDebt = valueToBigNumber(u.scaledVariableDebt);
                const liquidityIndex = valueToBigNumber(reserve.liquidityIndex).div(RAY);
                const variableBorrowIndex = valueToBigNumber(reserve.variableBorrowIndex).div(RAY);
                let liquidationThreshold = valueToBigNumber(reserve.reserveLiquidationThreshold);
                if (emodeData != null) liquidationThreshold = valueToBigNumber(emodeData.liquidationThreshold);
                
                const price = priceInMarketReferenceCurrency.div(marketReferenceCurrencyUnit);
                const deposited = scaledATokenBalance.multipliedBy(liquidityIndex);
                const borrowed = scaledVariableDebt.multipliedBy(variableBorrowIndex);      // Spark doesn't use stable debt
                const depositedUSD = deposited.div(units).multipliedBy(price);
                const borrowedUSD = borrowed.div(units).multipliedBy(price);

                if (u.usageAsCollateralEnabledOnUser) {
                    totalCollateralThreshold = totalCollateralThreshold.plus(depositedUSD.multipliedBy(liquidationThreshold).div(10000));
                    
                    if (depositedUSD.isGreaterThan(largestSupplyAmount)) {
                        largestSupplyAmount = depositedUSD;
                        largestSupplyTokens = deposited;
                        largestSupplyReserve = reserve;
                    }
                }
                totalBorrowed = totalBorrowed.plus(borrowedUSD);
                if (borrowedUSD.isGreaterThan(largestBorrowAmount)) {
                    largestBorrowAmount = borrowedUSD;
                    largestBorrowTokens = borrowed;
                    largestBorrowReserve = reserve;
                }
            });

            if (totalBorrowed.isEqualTo(0)) return false;

            let healthFactor = totalCollateralThreshold.div(totalBorrowed);
            p.largestBorrowAmount = largestBorrowAmount;
            p.largestBorrowTokens = largestBorrowTokens;
            p.largestBorrowReserve = largestBorrowReserve;
            p.largestSupplyAmount = largestSupplyAmount;
            p.largestSupplyTokens = largestSupplyTokens;
            p.largestSupplyReserve = largestSupplyReserve;
            p.healthFactor = healthFactor;

            return healthFactor.isLessThan(healthFactorLiquidate);
        });

        this.logger(`${positions.length} positions are underwater.`);

        return positions;
    }

    async fetchDEXRoute (from, to, amount) {
        const apiBaseUrl = `${process.env.ONEINCH_URL}/v5.0/${chainId}`;
        function apiRequestUrl(methodName, queryParams) {
            return apiBaseUrl + methodName + '?' + (new URLSearchParams(queryParams)).toString();
        }
    
        const result = await fetch(apiRequestUrl('/swap', {
            fromTokenAddress: from.underlyingAsset,
            toTokenAddress: to.underlyingAsset,
            amount: amount.toFixed(0),
            fromAddress: addresses.LIQUIDATE_LOAN,
            slippage: maxDEXSlippage,
            allowPartialFill: false,
            disableEstimate: true,
        }), {
            headers: {
                'Authorization': `Bearer ${process.env.ONEINCH_API_KEY}`
            }
        }).then(res => res.json());
    
        if (!result.error) {
            return result;
        } else {
            throw new Error(`Failed to fetch DEX route.\n${JSON.stringify(result, null, 2)}`);
        }
    }

    async liquidate(position) {
        const liquidationParams = getLiquidationParams(position);
        let liquidator;
        const executeUrl = hre.network.config.executeUrl;
        if (executeUrl) {
            const provider = new ethers.Wallet(hre.network.config.accounts[0]).connect(new ethers.providers.JsonRpcProvider(executeUrl));
            liquidator = await hre.ethers.getContractAt("LiquidateLoan", addresses.LIQUIDATE_LOAN, provider);
        } else {
            liquidator = await hre.ethers.getContractAt("LiquidateLoan", addresses.LIQUIDATE_LOAN);
        }
        this.logger(`Collateral to Liquidate: ${liquidationParams.collateralToLiquidate.toFixed(0)} ${position.largestSupplyReserve.symbol}, Debt to Cover: ${liquidationParams.debtToCover.toFixed(0)} ${position.largestBorrowReserve.symbol}`);
        this.logger(`Fetching DEX route for ${liquidationParams.collateralToLiquidate.toFixed(0)} ${position.largestSupplyReserve.symbol} -> ${position.largestBorrowReserve.symbol}...`);
        const swapResult = await this.fetchDEXRoute(position.largestSupplyReserve, position.largestBorrowReserve, liquidationParams.collateralToLiquidate);
        const args = [
            position.largestBorrowReserve.underlyingAsset,
            liquidationParams.debtToCover.toFixed(0),
            position.largestSupplyReserve.underlyingAsset,
            position.id,
            swapResult.tx.to,
            swapResult.tx.data,
        ];
        const [signer] = await ethers.getSigners();
        const nonce = await signer.getTransactionCount();
        let gasLimitEstimate = 2000000;
        try {
            gasLimitEstimate = await liquidator.estimateGas.executeFlashLoans(
                ...args
            );
        } catch (e) {
            throw new Error(`Gas Estimate Failed. Reason = ${e.reason}`);
        }
        return await retry(async (attempts) => {
            const feeData = await ethers.provider.getFeeData();
            const overrides = {
                gasLimit: gasLimitEstimate * 2,
                maxFeePerGas: feeData.maxFeePerGas,
                maxPriorityFeePerGas: feeData.maxPriorityFeePerGas.mul(2 ** attempts),
                nonce
            };
            this.logger(`Liquidation tx sent for position ${position.id} [Nonce: ${nonce}, Max Gas: ${overrides.maxFeePerGas.div(1e9)}, Priority Gas: ${overrides.maxPriorityFeePerGas.div(1e9)}, Gas Limit: ${overrides.gasLimit}]`);
            return await liquidator.executeFlashLoans(
                ...args,
                overrides
            );
        }, (err) => {
            if (err.code === 'REPLACEMENT_UNDERPRICED') {
                this.logger(`Underpriced. Retrying with higher priority fee...`);
                return true;
            }
        }, 1000, 100);
    }

    async triggerLiquidation(position) {
        try {
            this.logger(`Triggering liquidation for position ${position.id}. Borrowed ${position.largestBorrowAmount.toFixed(0)} USD of ${position.largestBorrowReserve.symbol} against ${position.largestSupplyAmount.toFixed(0)} USD of ${position.largestSupplyReserve.symbol} collateral (HF: ${position.healthFactor})`);
            const liquidationTx = await this.liquidate(position);
            await timeout(liquidationTx.wait(), 2 * 60 * 1000);
            this.logger(`Liquidation tx mined for position ${position.id}: ${liquidationTx.hash}`);

            position._completedTx = liquidationTx;
        } catch (err) {
            position._sent = false;
            position._failures++;
            this.logger(`Error triggering liquidation for position ${position.id}.\n${err.stack}`);
        }
    }

    async run(_logger) {
        if (_logger != null) this.logger = _logger;
    
        this.logger("Spark Lend Liquidator starting up...");
    
        return Promise.all([
            // Once per 1 minute
            interval(async () => {
                try {
                    await this.refreshReserves();

                    // TheGraph query to add positions to the list
                    const { _unhealthyPositions, blockNumber } = await this.queryPositions();
                    for (const p of _unhealthyPositions) {
                        const index = this.unhealthyPositions.findIndex(up => up.id === p.id);
                        if (index === -1) {
                            // New record
                            p._sent = false;
                            p._failures = 0;
                            this.unhealthyPositions.push(p);
                            this.logger(`Adding position to be liquidated: ${p.id}`);
                        } else if (this.unhealthyPositions[index]._completedTx != null && blockNumber > this.unhealthyPositions[index]._completedTx.blockNumber) {
                            // Previously seen, but it's been mined and still wants to be liquidated (maybe multiple liquidations on the same position?)
                            p._sent = false;
                            p._failures = 0;
                            this.unhealthyPositions.splice(index, 1, p);
                            this.logger(`Replacing position to be liquidated: ${p.id}`);
                        }
                    }

                    // Manual positions
                    const manualPositions = await this.readAllManualPositions();
                    for (const p of manualPositions) {
                        const index = this.unhealthyPositions.findIndex(up => up.id === p.id);
                        if (index === -1) {
                            // New record
                            p._sent = false;
                            p._failures = 0;
                            this.unhealthyPositions.push(p);
                            this.logger(`Adding position to be liquidated: ${p.id}`);
                        } else if (this.unhealthyPositions[index]._completedTx != null) {    // Manual positions are always up to date
                            // Previously seen, but it's been mined and still wants to be liquidated (maybe multiple liquidations on the same position?)
                            p._sent = false;
                            p._failures = 0;
                            this.unhealthyPositions.splice(index, 1, p);
                            this.logger(`Replacing position to be liquidated: ${p.id}`);
                        }
                    }

                    // Remove any old positions
                    this.unhealthyPositions = this.unhealthyPositions.filter(p => p._failures < maxFailuresBeforeDrop);
                } catch (err) {
                    // Intermittent failure -- carry on
                    this.logger(`Intermittent failure.\n${err.stack}`);
                }
            }, 60 * 1000),

            // Once per 10 seconds
            interval(async () => {
                try {
                    // Always make sure this is sorted by largest positions first
                    this.unhealthyPositions.sort((a, b) => b.largestBorrowAmount.comparedTo(a.largestBorrowAmount));

                    for (const p of this.unhealthyPositions) {
                        if (p._sent) continue;
                        p._sent = true;
                        await this.triggerLiquidation(p);
                    }
                } catch (err) {
                    // Intermittent failure -- carry on
                    this.logger(`Intermittent failure.\n${err.stack}`);
                }
            }, 10 * 1000)
        ]);
    }

}

module.exports = LiquidationWatcher;
