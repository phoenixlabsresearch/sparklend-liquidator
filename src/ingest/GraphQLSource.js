const { gql } = require("graphql-request");
const { execute } = require("../../.graphclient");
const Position = require("../model/Position");
const PositionSet = require("../model/PositionSet");
const Deposit = require("../model/Deposit");
const Borrow = require("../model/Borrow");
const { valueToBigNumber } = require("../utils");

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

class GraphQLSource {

    constructor(network) {
        this.network = network;
    }

    async fetchAllRows (query, resolver) {
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

    async fetchAll() {
        const { rows, blockNumber } = await this.fetchAllRows(positionQuery, r => r.accounts);

        return new PositionSet(rows.map(r => {
            return new Position(
                this.network,
                blockNumber,
                r.id.toLowerCase(),
                r.positions
                    .filter(p => p.side === "BORROWER")
                    .map(p => new Borrow(
                        p.market.inputToken.id.toLowerCase(),
                        valueToBigNumber(p.balance)
                    )),
                r.positions
                    .filter(p => (p.side === "LENDER" || p.side === "COLLATERAL") && p.isCollateral)
                    .map(p => new Deposit(
                        p.market.inputToken.id.toLowerCase(),
                        valueToBigNumber(p.balance),
                        valueToBigNumber(p.market.liquidationThreshold).div(10000)
                    ))
            )
        }));
    }

}

module.exports = GraphQLSource;