const PositionSet = require("../model/PositionSet");
const OneInchLiquidation = require("./OneInchLiquidation");

class Liquidator {

    constructor(config, network, logger) {
        this.config = config;
        this.network = network;
        this.logger = logger;

        this.positions = new PositionSet([]);
    }

    addPositionsToLiquidate(positionSet) {
        const existingPositions = this.positions.positionArray;
        const positionsAdded = [];
        const positionsUpdated = [];
        for (const p of positionSet.positionArray) {
            if (!this.positions.positions.has(p.id)) {
                // A completely new liquidation is added
                existingPositions.push(p);
                positionsAdded.push(p);
            } else if (this.positions.positions.get(p.id).blockNumber < p.blockNumber) {
                // We have new information about an existing liquidation
                existingPositions.splice(existingPositions.indexOf(this.positions.positions.get(p.id)), 1, p);
                positionsUpdated.push(p);
            }
        }
        this.positions = new PositionSet(existingPositions);
        return {
            positionsAdded: positionsAdded,
            positionsUpdated: positionsUpdated
        };
    }

    async liquidate() {
        // Attempt to liquidate all the positions
        for (const position of this.positions.positionArray) {
            const liquidaion = new OneInchLiquidation(this.config.oneinch, position);
            try {
                this.logger(`[${this.network}] Attempting to liquidate ${position}`);
                await liquidaion.execute();
                this.logger(`[${this.network}] Liquidation successful ${position}`);
            } catch (err) {
                this.logger(`[${this.network}] Liquidation failed ${position}\n${err.stack}`);
                return;
            }
        }

        // Refresh the positions to see if they are good to remove
        this.positions = (await this.positions.fetchLatest()).filter({ underwaterOnly:true });
    }

}

module.exports = Liquidator;