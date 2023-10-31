const { gql } = require("graphql-request");
const { execute } = require("../../.graphclient");
const Position = require("../model/Position");
const PositionSet = require("../model/PositionSet");
const Deposit = require("../model/Deposit");
const Borrow = require("../model/Borrow");
const { valueToBigNumber } = require("../Utils");

function buildQuery(prefix) {
    return gql`
        query getActivePositions($limit: Int!, $offset: Int!) {
            ${prefix}_meta {
                block {
                    number
                }
            }
            ${prefix}accounts(
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
}

class GraphQLSource {

    constructor(network) {
        this.network = network;
        this.positionQuery = buildQuery(network.theGraphPrefix);
    }

    async fetchAllRows (query, resolver) {
        const rows = [];
        const limit = 1000;
        let offset = 0;
        let result = await execute(query, { limit, offset });
        const blockNumber = result.data[this.network.theGraphPrefix + "_meta"].block.number;
        for (const r of resolver(result.data)) rows.push(r);
        while (offset + limit === rows.length) {
            offset += limit;
            result = await execute(query, { limit, offset });
            for (const r of resolver(result.data)) rows.push(r);
        }
        return { rows, blockNumber };
    }

    async fetchAll() {
        const { rows, blockNumber } = await this.fetchAllRows(this.positionQuery, r => r[this.network.theGraphPrefix + "accounts"]);

        const positions = rows.map(r => {
            return new Position({
                network: this.network,
                blockNumber,
                id: r.id.toLowerCase(),
                deposits: r.positions
                    .filter(p => (p.side === "LENDER" || p.side === "COLLATERAL") && p.isCollateral !== false)
                    .map(p => new Deposit({
                        asset: p.market.inputToken.id.toLowerCase(),
                        amount: valueToBigNumber(p.balance).div(this.network.getReserve(p.market.inputToken.id.toLowerCase()).units),
                        liquidationThreshold: valueToBigNumber(p.market.liquidationThreshold).div(100)
                    })),
                borrows: r.positions
                    .filter(p => p.side === "BORROWER")
                    .map(p => new Borrow({
                        asset: p.market.inputToken.id.toLowerCase(),
                        amount: valueToBigNumber(p.balance).div(this.network.getReserve(p.market.inputToken.id.toLowerCase()).units)
                    })),
            });
        });

        return new PositionSet(positions.filter(p => p.getBorrowTotalUSDValue().isGreaterThan(0)));
    }

    async fetchAllUnderwater() {
        // Need to do two passes as the graphql does not specify emode category
        const positions = (await this.fetchAll()).filter({ underwaterOnly: true });
        return (await positions.fetchLatest()).filter({ underwaterOnly: true });
    }

}

module.exports = GraphQLSource;