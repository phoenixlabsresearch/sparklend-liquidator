const hre = require("hardhat");
const { interval, shortNum, sleep, retry, exponentialBackoff, timeout, valueToBigNumber } = require("./utils");
const moment = require("moment");
const { gql } = require("graphql-request");
const { execute } = require("../.graphclient");
const BigNumber = require("bignumber.js");
const { addresses, routes } = require("./constants");

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

            return healthFactor.isLessThan(1);
        });
        this.logger(`Found ${_unhealthyPositions.length}/${rows.length} unhealthy positions`);

        return { _unhealthyPositions, blockNumber };
    }

    async liquidate(position) {
        const liquidator = await hre.ethers.getContractAt("LiquidateLoan", addresses.LIQUIDATE_LOAN);
        const args = [
            addresses[position.largestBorrowSymbol],
            position.largestBorrowTokens.toString(),
            addresses[position.largestSupplySymbol],
            position.id,
            0,
            routes[position.largestSupplySymbol][position.largestBorrowSymbol]
        ];
        const feeData = await ethers.provider.getFeeData();
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
            this.logger(`Triggering liquidation for position ${position.id}. Borrowed ${position.largestBorrowAmount.toFixed(0)} USD of ${position.largestBorrowSymbol} against ${position.largestSupplyAmount.toFixed(0)} USD of ${position.largestSupplySymbol} collateral${position.largestSupplyAmount.isLessThan(position.largestBorrowAmount) ? "[UNDERWATER!!!]" : ""} (HF: ${position.healthFactor})`);
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
                    const { _unhealthyPositions, blockNumber } = await this.queryPositions();
                    for (const p of _unhealthyPositions) {
                        const index = this.unhealthyPositions.findIndex(up => up.id === p.id);
                        if (index === -1) {
                            // New record
                            p._sent = false;
                            this.unhealthyPositions.push(p);
                            this.logger(`Adding position to be liquidated: ${p.id}`);
                        } else if (p._completedTx != null && blockNumber > p._completedTx.blockNumber) {
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
            /*interval(async () => {
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
            }, 10 * 1000)*/
        ]);
    }

}

module.exports = LiquidationWatcher;
