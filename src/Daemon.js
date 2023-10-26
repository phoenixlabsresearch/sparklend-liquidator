const GraphQLSource = require("./ingest/GraphQLSource");
const ManualSource = require("./ingest/ManualSource");
const ReserveSource = require("./ingest/ReserveSource");
const Network = require("./model/Network");
const { interval } = require("./Utils");

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

        const network = new Network({
            name: "Ethereum",
            theGraphEndpoint: "ethereumPrimary",
            readRpc: hre.network.config.url,
            writeRpc: hre.network.config.url,
            poolAddressProvider: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
            uiPoolDataProvider: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
            liquidateLoan: "0x0"
        });
        await network.refreshReserves();
        this.logger(await (new GraphQLSource(network)).fetchAll());
    
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