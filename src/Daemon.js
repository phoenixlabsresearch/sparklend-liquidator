const GraphQLSource = require("./ingest/GraphQLSource");
const Network = require("./model/Network");
const { interval } = require("./Utils");
const { getConfig } = require("./config");
const Liquidator = require("./liquidate/Liquidator");

class Daemon {

    constructor(logger) {
        this.logger = logger;
    }

    async intervalIgnoreErrors(callback, ms) {
        return interval(async () => {
            try {
                await callback();
            } catch (err) {
                this.logger(`Intermittent failure.\n${err.stack}`);
            }
        
        }, ms);
    }

    async run() {
        this.logger("SparkLend Liquidator starting up...");

        const config = getConfig();
        const liquidators = new Map();
        const networks = await Promise.all(config.networks.map(async (d) => {
            const network = new Network(config, d);
            await network.init();
            liquidators.set(network.chainId, new Liquidator(config, network, this.logger));
            return network;
        }));

        this.logger("All networks loaded.");
    
        return Promise.all([
            // Once per 1 minute
            this.intervalIgnoreErrors(async () => {
                await Promise.all(networks.map(async (network) => {
                    // Refresh reserves
                    await network.refreshReserves();
                    this.logger(`[${network}] ${network.reserves.join(", ")}`);
                    
                    // Find all positions that need liquidation and add them to the liquidator
                    const positionsToLiquidate = (await (new GraphQLSource(network)).fetchAllUnderwater()).filter({ minBorrowUSDValue:100 });
                    const {
                        positionsAdded,
                        positionsUpdated
                    } = liquidators.get(network.chainId).addPositionsToLiquidate(positionsToLiquidate);
                    if (positionsAdded.length > 0 || positionsUpdated.length > 0) {
                        let str = `[${network}] Liquidation`;
                        if (positionsAdded.length > 0) {
                            str += ` - Added ${positionsAdded.length}: ${positionsAdded.join(", ")}`;
                        }
                        if (positionsUpdated.length > 0) {
                            str += ` - Updated ${positionsUpdated.length}: ${positionsUpdated.join(", ")}`;
                        }
                        this.logger(str);
                    }
                }));
            }, 60 * 1000),

            // Once per 10 seconds
            this.intervalIgnoreErrors(async () => {
                await Promise.all(networks.map(async (network) => {
                    await liquidators.get(network.chainId).liquidate();
                }));
            }, 10 * 1000)
        ]);
    }

}

module.exports = Daemon;