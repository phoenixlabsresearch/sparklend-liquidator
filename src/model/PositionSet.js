// A set of positions that enforces uniqueness by ID
class PositionSet {

    constructor(positions) {
        this.positions = new Map();
        for (const p of positions) {
            this.positions.set(p.id, p);
        }
        this.positionArray = positions;
    }

    filter(opts) {
        return new PositionSet(Array.from(this.positions.values()).filter(p => {
            let valid = true;

            if (valid && opts.minBorrowUSDValue != null)
                valid = p.getBorrowTotalUSDValue().isGreaterThan(opts.minBorrowUSDValue);

            if (valid && opts.underwaterOnly != null)
                valid = p.getHealthFactor().isLessThan(1);

            return valid;
        }));
    }

    // Fetch the latest data for all positions from a manual fetch (read rpc node)
    async fetchLatest() {
        // First separate the positions by network
        const positionsByNetwork = new Map();
        for (const p of this.positions.values()) {
            if (!positionsByNetwork.has(p.network)) {
                positionsByNetwork.set(p.network, []);
            }
            positionsByNetwork.get(p.network).push(p);
        }

        // Now resolve the e-mode category for each network
        const proms = [];
        for (const [network, positions] of positionsByNetwork) {
            proms.push(new ManualSource(network, positions.map(p => p.id)).fetchAll());
        }
        return new PositionSet((await Promise.all(proms)).flatMap(p => p.positionArray));
    }

    toString() {
        if (this.positions.size <= 50) {
            return `${Array.from(this.positions.values()).map(p => p.toString()).join(", ")}`;
        } else {
            return `PositionSet(${this.positions.size})`;
        }
    }

}

module.exports = PositionSet;

// Need to import after the class definition
const ManualSource = require("../ingest/ManualSource");