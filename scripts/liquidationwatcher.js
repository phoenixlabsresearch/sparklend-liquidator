const { interval, shortNum, sleep, retry, exponentialBackoff } = require("./utils");
const moment = require("moment");
const { GraphQLClient, gql } = require("graphql-request");

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
            
        });
        this.logger(`Found ${unhealthyPositions.length}/${positions.length} unhealthy positions`);
    }

    async run(_logger) {
        if (_logger != null) this.logger = _logger;
    
        this.logger("Spark Lend Liquidator starting up...");
    
        return Promise.all([
            // Once per 1 minute
            interval(async () => {
                try {
                    await this.queryPositions();
                } catch (err) {
                    // Intermittent failure -- carry on
                    this.logger(`Intermittent failure. Error = ${err}`);
                }
            }, 60 * 1000)
        ]);
    }

}

module.exports = LiquidationWatcher;
