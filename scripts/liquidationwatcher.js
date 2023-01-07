const hre = require("hardhat");
const { interval, shortNum, sleep, retry, exponentialBackoff, valueToBigNumber } = require("./utils");
const moment = require("moment");
const { GraphQLClient, gql } = require("graphql-request");
const BigNumber = require("bignumber.js");

const dataApi = new GraphQLClient("https://api.studio.thegraph.com/query/40284/sparklend-testnet/v0.0.4");
const positionQuery = gql`
    query getActivePositions($limit: Int!, $offset: Int!) {
        _meta {
            block {
                number
            }
        }
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
    unhealthyPositions = [];

    constructor() {
    }

    async queryPositions() {
        this.urns = [];

        // Fetch all urns
        this.logger(`Fetching all positions...`);
        const positions = (await fetchAllRows(positionQuery, r => r.users));
        const _unhealthyPositions = positions.filter(p => {
            let totalBorrowed = BigNumber(0);
            let totalCollateralThreshold = BigNumber(0);
            let largestBorrowAsset;
            let largestBorrowAmount = BigNumber(0);
            let largestBorrowTokens;
            let largestSupplyAsset;
            let largestSupplyAmount = BigNumber(0);

            p.borrowReserve.forEach((borrowReserve, i) => {
                const priceInUSD = valueToBigNumber(borrowReserve.reserve.price.priceInEth);    // Number is actually in USD despite name
                const principalBorrowed = valueToBigNumber(borrowReserve.currentTotalDebt);
                const decimals = valueToBigNumber(borrowReserve.reserve.decimals);
                const borrowed = priceInUSD.multipliedBy(principalBorrowed).div(BigNumber(10).exponentiatedBy(decimals));
                totalBorrowed = totalBorrowed.plus(borrowed);

                if (borrowed.isGreaterThan(largestBorrowAmount)) {
                    largestBorrowAsset = borrowReserve.reserve.underlyingAsset;
                    largestBorrowAmount = borrowed;
                    largestBorrowTokens = principalBorrowed;
                }
            });
            p.collateralReserve.forEach((collateralReserve, i) => {
                const priceInUSD = valueToBigNumber(collateralReserve.reserve.price.priceInEth);
                const principalATokenBalance = valueToBigNumber(collateralReserve.currentATokenBalance);
                const liquidationThreshold = valueToBigNumber(collateralReserve.reserve.reserveLiquidationThreshold);
                const decimals = valueToBigNumber(collateralReserve.reserve.decimals);
                const supplied = priceInUSD.multipliedBy(principalATokenBalance).multipliedBy(liquidationThreshold.div(10000)).div(BigNumber(10).exponentiatedBy(decimals));
                totalCollateralThreshold = totalCollateralThreshold.plus(supplied);

                if (supplied.isGreaterThan(largestSupplyAmount)) {
                    largestSupplyAsset = collateralReserve.reserve.underlyingAsset;
                    largestSupplyAmount = supplied;
                }
            });

            p.largestBorrowAsset = largestBorrowAsset;
            p.largestBorrowAmount = largestBorrowAmount;
            p.largestBorrowTokens = largestBorrowTokens;
            p.largestSupplyAsset = largestSupplyAsset;
            p.largestSupplyAmount = largestSupplyAmount;

            let healthFactor = totalCollateralThreshold / totalBorrowed;
            return healthFactor <= 1;
        });
        this.logger(`Found ${_unhealthyPositions.length}/${positions.length} unhealthy positions`);

        return _unhealthyPositions;
    }

    async liquidate(position) {
        const liquidator = await hre.ethers.getContractAt("LiquidateLoan", "0x577896615Ed7aB76e111aD2b61B83a78dA03cd4D");
        return await liquidator.executeFlashLoans(
            position.largestBorrowAsset,
            position.largestBorrowTokens.toString(),
            position.largestSupplyAsset,
            position.id,
            0,
            ethers.utils.solidityPack(
                [
                    "address",
                    "uint24",
                    "address",
                ],
                [
                    position.largestSupplyAsset,
                    500,
                    position.largestBorrowAsset,
                ]
            )
        );
    }

    async triggerLiquidation(position) {
        try {
            this.logger(`Triggering liquidation for position ${position.id}`);
            const liquidationTx = await this.liquidate(position);
            this.logger(`Liquidation tx sent for position ${position.id}: ${liquidationTx.hash}`);
            await liquidationTx.wait();
            this.logger(`Liquidation tx mined for position ${position.id}: ${liquidationTx.hash}`);

            position._completed = true;
            position._completedTx = liquidationTx.hash;
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
                    const _unhealthyPositions = await this.queryPositions();
                    for (const p of _unhealthyPositions) {
                        if (this.unhealthyPositions.findIndex(up => up.id === p.id) === -1) {
                            p._sent = false;
                            this.unhealthyPositions.push(p);
                        } else {
                            // TODO we can still override if completed tx blocknum is < current data from the graph
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
                    for (const p of this.unhealthyPositions) {
                        if (p._sent) continue;
                        p._sent = true;
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
