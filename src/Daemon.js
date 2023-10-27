const GraphQLSource = require("./ingest/GraphQLSource");
const Network = require("./model/Network");
const { interval } = require("./Utils");
const config = require("./config");
const { valueToBigNumber } = require("@aave/math-utils");
const OneInch = require("./swap/OneInch");

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

        const network = new Network(config.networks[0]);
        await network.init();
        this.logger(await (new OneInch(network)).getSwapData(
            "0x6b175474e89094c44da98b954eedeac495271d0f",
            "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            valueToBigNumber("100")
        ));

        /*await Promise.all(config.networks.map(async (d) => {
            const network = new Network(d);
            await network.init();
            const positions = await (new GraphQLSource(network)).fetchAll();
            const underwaterPositions = positions.filter({ underwaterOnly:true });
            await underwaterPositions.resolveEMode();
            this.logger(network.name + ": " + underwaterPositions.filter({ underwaterOnly:true }));
        }));*/
    
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