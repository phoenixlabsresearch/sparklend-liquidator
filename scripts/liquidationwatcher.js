const hre = require("hardhat");
const { interval, retry, timeout, valueToBigNumber, readAllFiles, multicall } = require("./utils");
const { gql } = require("graphql-request");
const { execute } = require("../.graphclient");
const BigNumber = require("bignumber.js");
const { addresses, routes } = require("./constants");

const RAY = new BigNumber(10).pow(27);

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
            deposits {
                amount
                amountUSD
                asset {
                    symbol
                    _market {
                        canUseAsCollateral
                        liquidationThreshold
                    }
                }
            }
            borrows {
                amount
                amountUSD
                asset {
                    symbol
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

class LiquidationWatcher {

    logger = (log) => {};
    unhealthyPositions = [];

    constructor() {
    }

    async queryPositions() {
        this.urns = [];

        // Fetch all urns
        this.logger(`Fetching all positions...`);
        const { rows, blockNumber } = (await fetchAllRows(positionQuery, r => r.accounts));
        let lowHF = BigNumber(0);
        let highHF = BigNumber(0);
        let averageHF = BigNumber(0);
        let averageHFCount = 0;
        const _unhealthyPositions = rows.filter(p => {
            if (p.deposits.length == 0 || p.borrows.length == 0) return false;

            let totalBorrowed = BigNumber(0);
            let totalCollateralThreshold = BigNumber(0);
            let largestBorrowAmount = BigNumber(0);
            let largestBorrowTokens;
            let largestBorrowSymbol;
            let largestSupplyAmount = BigNumber(0);
            let largestSupplySymbol;

            p.borrows.forEach((b, i) => {
                const borrowed = valueToBigNumber(b.amount);
                const borrowedUSD = valueToBigNumber(b.amountUSD);
                totalBorrowed = totalBorrowed.plus(borrowedUSD);

                if (borrowedUSD.isGreaterThan(largestBorrowAmount)) {
                    largestBorrowAmount = borrowedUSD;
                    largestBorrowTokens = borrowed;
                    largestBorrowSymbol = b.asset.symbol;
                }
            });
            p.deposits.filter(d => d.asset._market.canUseAsCollateral).forEach((d, i) => {
                const depositedUSD = valueToBigNumber(d.amountUSD);
                const liquidationThreshold = valueToBigNumber(d.asset._market.liquidationThreshold);
                totalCollateralThreshold = totalCollateralThreshold.plus(depositedUSD.multipliedBy(liquidationThreshold.div(100)));

                if (depositedUSD.isGreaterThan(largestSupplyAmount)) {
                    largestSupplyAmount = depositedUSD;
                    largestSupplySymbol = d.asset.symbol;
                }
            });

            let healthFactor = totalCollateralThreshold.div(totalBorrowed);
            p.largestBorrowAmount = largestBorrowAmount;
            p.largestBorrowTokens = largestBorrowTokens;
            p.largestBorrowSymbol = largestBorrowSymbol;
            p.largestSupplyAmount = largestSupplyAmount;
            p.largestSupplySymbol = largestSupplySymbol;
            p.healthFactor = healthFactor;

            averageHF = averageHF.plus(healthFactor);
            averageHFCount++;
            if (healthFactor.isLessThan(lowHF) || lowHF.isEqualTo(0)) lowHF = healthFactor;
            if (healthFactor.isGreaterThan(highHF)) highHF = healthFactor;

            return healthFactor.isLessThan(1);
        });
        this.logger(`Found ${_unhealthyPositions.length}/${rows.length} unhealthy positions. Low HF = ${lowHF.toFixed(2)}, Average HF = ${averageHF.div(averageHFCount).toFixed(2)},  High HF = ${highHF.toFixed(2)}`);

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
        const pool = await ethers.getContractAt("IPool", addresses.LENDING_POOL);
        const [reserveDataArray, currencyInfo] = await uiPoolDataProviderV3.getReservesData(addresses.LENDING_POOL_ADDRESS_PROVIDER);
        const userReservesData = await multicall(positions.map(p => {
            return [addresses.UI_POOL_DATA_PROVIDER, uiPoolDataProviderV3.interface.encodeFunctionData("getUserReservesData", [addresses.LENDING_POOL_ADDRESS_PROVIDER, p.id])];
        }), r => uiPoolDataProviderV3.interface.decodeFunctionResult("getUserReservesData", r));
        const reserveData = {};
        reserveDataArray.forEach(r => {
            reserveData[r.underlyingAsset] = r;
        });

        // Fetch e-mode
        const emodeDatas = {
            "1": await pool.getEModeCategoryData(1)
        }
        
        positions = positions.filter((p, i) => {
            const userReserveData = userReservesData[i][0];
            const emodeCategory = userReservesData[i][1];
            const emodeData = emodeDatas[emodeCategory.toString()];

            let totalBorrowed = BigNumber(0);
            let totalCollateralThreshold = BigNumber(0);
            let largestBorrowAmount = BigNumber(0);
            let largestBorrowTokens;
            let largestBorrowSymbol;
            let largestSupplyAmount = BigNumber(0);
            let largestSupplySymbol;

            userReserveData.forEach(u => {
                const reserve = reserveData[u.underlyingAsset];
                const units = new BigNumber(10).pow(reserve.decimals.toString());

                const priceInMarketReferenceCurrency = valueToBigNumber(reserve.priceInMarketReferenceCurrency);
                const marketReferenceCurrencyUnit = valueToBigNumber(currencyInfo.marketReferenceCurrencyUnit);
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
                        largestSupplySymbol = reserve.symbol;
                    }
                }
                totalBorrowed = totalBorrowed.plus(borrowedUSD);
                if (borrowedUSD.isGreaterThan(largestBorrowAmount)) {
                    largestBorrowAmount = borrowedUSD;
                    largestBorrowTokens = borrowed;
                    largestBorrowSymbol = reserve.symbol;
                }
            });

            if (totalBorrowed.isEqualTo(0)) return false;

            let healthFactor = totalCollateralThreshold.div(totalBorrowed);
            p.largestBorrowAmount = largestBorrowAmount;
            p.largestBorrowTokens = largestBorrowTokens;
            p.largestBorrowSymbol = largestBorrowSymbol;
            p.largestSupplyAmount = largestSupplyAmount;
            p.largestSupplySymbol = largestSupplySymbol;
            p.healthFactor = healthFactor;

            return healthFactor.isLessThan(1);
        });

        this.logger(`${positions.length} positions are underwater.`);

        return positions;
    }

    async liquidate(position) {
        const liquidator = await hre.ethers.getContractAt("LiquidateLoan", addresses.LIQUIDATE_LOAN);
        const args = [
            addresses[position.largestBorrowSymbol],
            position.largestBorrowTokens.toFixed(0),
            addresses[position.largestSupplySymbol],
            position.id,
            routes[position.largestSupplySymbol][position.largestBorrowSymbol]
        ];
        const [signer] = await ethers.getSigners();
        const nonce = await signer.getTransactionCount();
        let gasLimitEstimate = 1000000;
        try {
            gasLimitEstimate = await liquidator.estimateGas.executeFlashLoans(
                ...args
            );
        } catch (e) {
            throw `Gas Estimate Failed. Reason = ${e.reason}`;
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
            this.logger(`Triggering liquidation for position ${position.id}. Borrowed ${position.largestBorrowAmount.toFixed(0)} USD of ${position.largestBorrowSymbol} against ${position.largestSupplyAmount.toFixed(0)} USD of ${position.largestSupplySymbol} collateral (HF: ${position.healthFactor})`);
            const liquidationTx = await this.liquidate(position);
            await timeout(liquidationTx.wait(), 2 * 60 * 1000);
            this.logger(`Liquidation tx mined for position ${position.id}: ${liquidationTx.hash}`);

            position._completedTx = liquidationTx;
        } catch (err) {
            position._sent = false;
            this.logger(`Error triggering liquidation for position ${position.id}. Error = ${err}`);
        }
    }

    async run(_logger) {
        if (_logger != null) this.logger = _logger;
    
        this.logger("Spark Lend Liquidator starting up...");
    
        return Promise.all([
            // Once per 1 minute
            interval(async () => {
                try {
                    // TheGraph query to add positions to the list
                    const { _unhealthyPositions, blockNumber } = await this.queryPositions();
                    for (const p of _unhealthyPositions) {
                        const index = this.unhealthyPositions.findIndex(up => up.id === p.id);
                        if (index === -1) {
                            // New record
                            p._sent = false;
                            this.unhealthyPositions.push(p);
                            this.logger(`Adding position to be liquidated: ${p.id}`);
                        } else if (this.unhealthyPositions[index]._completedTx != null && blockNumber > this.unhealthyPositions[index]._completedTx.blockNumber) {
                            // Previously seen, but it's been mined and still wants to be liquidated (maybe multiple liquidations on the same position?)
                            p._sent = false;
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
                            this.unhealthyPositions.push(p);
                            this.logger(`Adding position to be liquidated: ${p.id}`);
                        } else if (this.unhealthyPositions[index]._completedTx != null) {    // Manual positions are always up to date
                            // Previously seen, but it's been mined and still wants to be liquidated (maybe multiple liquidations on the same position?)
                            p._sent = false;
                            this.unhealthyPositions.splice(index, 1, p);
                            this.logger(`Replacing position to be liquidated: ${p.id}`);
                        }
                    }
                } catch (err) {
                    // Intermittent failure -- carry on
                    this.logger(`Intermittent failure. Error = ${err}`);
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
                    this.logger(`Intermittent failure. Error = ${err}`);
                }
            }, 10 * 1000)
        ]);
    }

}

module.exports = LiquidationWatcher;
