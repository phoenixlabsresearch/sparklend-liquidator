const GraphQLSource = require("./ingest/GraphQLSource");
const Network = require("./model/Network");
const { interval } = require("./Utils");
const config = require("./config");
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

        const liquidators = new Map();
        const networks = await Promise.all(config.networks.map(async (d) => {
            const network = new Network(d);
            await network.init();
            liquidators.set(network.chainId, new Liquidator(network, this.logger));
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
                    const {
                        positionsAdded,
                        positionsUpdated
                    } = liquidators.get(network.chainId).addPositionsToLiquidate(await (new GraphQLSource(network)).fetchAllUnderwater());
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
            }, 3 * 1000)
        ]);
    }

}

module.exports = Daemon;