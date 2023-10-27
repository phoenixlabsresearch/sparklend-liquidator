const GraphQLSource = require("./ingest/GraphQLSource");
const ManualSource = require("./ingest/ManualSource");
const ReserveSource = require("./ingest/ReserveSource");
const Network = require("./model/Network");
const { interval } = require("./Utils");
const config = require("./config");

class Daemon {

    constructor(logger) {
        this.logger = logger;
    }

    async intervalIgnoreErrors(callback, ms) {
        interval(async () => {
            try {
                await callback();
            } catch (err) {
                this.logger(`Intermittent failure.\n${err.stack}`);
            }
        
        }, ms);
    }

    async run() {
        this.logger("SparkLend Liquidator starting up...");

        await Promise.all(config.networks.map(async (d) => {
            const network = new Network(d);
            await network.refreshReserves();
            const positions = await (new GraphQLSource(network)).fetchAll();
            const underwaterPositions = positions.filter({ underwaterOnly:true });
            //await underwaterPositions.resolveEMode();
            this.logger(network.name + ": " + underwaterPositions.filter({ underwaterOnly:true }));
        }));
    
        return Promise.all([
            // Once per 1 minute
            this.intervalIgnoreErrors(async () => {
                
            }, 60 * 1000),

            // Once per 10 seconds
            this.intervalIgnoreErrors(async () => {
                
            }, 10 * 1000)
        ]);
    }

}

module.exports = Daemon;