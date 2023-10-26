const GraphQLSource = require("./ingest/GraphQLSource");
const ManualSource = require("./ingest/ManualSource");
const ReserveSource = require("./ingest/ReserveSource");
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

        this.logger(await new ReserveSource("0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE", "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb").fetchAll());
    
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