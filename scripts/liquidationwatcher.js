const { interval, shortNum, sleep, retry, exponentialBackoff, valueToBigNumber } = require("./utils");
const moment = require("moment");
const { GraphQLClient, gql } = require("graphql-request");
const BigNumber = require("bignumber.js");

const dataApi = new GraphQLClient("https://api.studio.thegraph.com/query/40284/sparklend-testnet/v0.0.1");
const positionQuery = gql`
    query getActivePositions($limit: Int!, $offset: Int!) {
        users(first: $limit, skip: $offset, orderBy: id, orderDirection: desc, where: {borrowedReservesCount_gt: 0}) {
            id
            borrowedReservesCount
            collateralReserve:reserves(where: {currentATokenBalance_gt: 0}) {
            currentATokenBalance
            reserve {
                usageAsCollateralEnabled
                reserveLiquidationThreshold
                reserveLiquidationBonus
                borrowingEnabled
                utilizationRate
                symbol
                underlyingAsset
                price {
                    priceInEth
                }
                decimals
            }
            }
            borrowReserve: reserves(where: {currentTotalDebt_gt: 0}) {
                currentTotalDebt
                reserve{
                    usageAsCollateralEnabled
                    reserveLiquidationThreshold
                    borrowingEnabled
                    utilizationRate
                    symbol
                    underlyingAsset
                    price {
                        priceInEth
                    }
                    decimals
                }
            }
        }
    }
`;

async function fetchAllRows (query, resolver) {
    const rows = [];
    const limit = 1000;
    let offset = 0;
    let result = await dataApi.request(query, { limit, offset });
    for (const r of resolver(result)) rows.push(r);
    while (offset + limit === rows.length) {
        offset += limit;
        result = await dataApi.request(query, { limit, offset });
        for (const r of resolver(result)) rows.push(r);
    }
    return rows;
}

class LiquidationWatcher {

    logger = (log) => {};

    constructor() {
    }

    async queryPositions() {
        this.urns = [];

        // Fetch all urns
        this.logger(`Fetching all positions...`);
        const positions = (await fetchAllRows(positionQuery, r => r.users));
        const unhealthyPositions = positions.filter(p => {
            let totalBorrowed = 0;
            let totalCollateralThreshold = 0;

            p.borrowReserve.forEach((borrowReserve, i) => {
                const priceInUSD = valueToBigNumber(borrowReserve.reserve.price.priceInEth);    // Number is actually in USD despite name
                const principalBorrowed = valueToBigNumber(borrowReserve.currentTotalDebt);
                const decimals = valueToBigNumber(borrowReserve.reserve.decimals);
                totalBorrowed += priceInUSD.multipliedBy(principalBorrowed).div(BigNumber(10).exponentiatedBy(decimals));
            });
            p.collateralReserve.forEach((collateralReserve, i) => {
                const priceInUSD = valueToBigNumber(collateralReserve.reserve.price.priceInEth);
                const principalATokenBalance = valueToBigNumber(collateralReserve.currentATokenBalance);
                const liquidationThreshold = valueToBigNumber(collateralReserve.reserve.reserveLiquidationThreshold);
                const decimals = valueToBigNumber(collateralReserve.reserve.decimals);
                totalCollateralThreshold += priceInUSD.multipliedBy(principalATokenBalance).multipliedBy(liquidationThreshold.div(10000)).div(BigNumber(10).exponentiatedBy(decimals));
            });
            let healthFactor = totalCollateralThreshold / totalBorrowed;
            return healthFactor <= 1;
        });
        this.logger(`Found ${unhealthyPositions.length}/${positions.length} unhealthy positions`);

        return unhealthyPositions;
    }

    async triggerLiquidation(position) {
        this.logger(`Triggering liquidation for position ${position.id}`);
        const liquidator = await hre.ethers.getContractAt("ILiquidator", "0x7bE1bE0aF7cC2cB2fA9aB9Cf7DcC8fB0Aa1d2a6A");
        const liquidationTx = await liquidator.liquidate(position.id);
        this.logger(`Liquidation tx sent: ${liquidationTx.hash}`);
        await liquidationTx.wait();
        this.logger(`Liquidation tx mined: ${liquidationTx.hash}`);
    }

    async run(_logger) {
        if (_logger != null) this.logger = _logger;
    
        this.logger("Spark Lend Liquidator starting up...");

        const unhealthyPositions = [];
    
        return Promise.all([
            // Once per 1 minute
            interval(async () => {
                try {
                    const _unhealthyPositions = await this.queryPositions();
                    for (const p of _unhealthyPositions) {
                        if (unhealthyPositions.findIndex(up => up.id === p.id) === -1) {
                            p._sent = false;
                            unhealthyPositions.push(p);
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
                    for (const p of unhealthyPositions) {
                        if (p._sent) continue;
                        this.triggerLiquidation(p);
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
