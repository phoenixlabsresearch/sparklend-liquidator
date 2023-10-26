// A set of positions that enforces uniqueness by ID
class PositionSet {

    constructor(positions) {
        this.positions = new Map();
        for (const p of positions) {
            this.positions.set(p.id, p);
        }
    }

    // Merge two sets and use the newer version if there are duplicates
    merge(otherPositionSet) {
        const newPositionSet = new PositionSet(Array.from(this.positions.values()));
        for (const p of otherPositionSet.positions.values()) {
            if (p.blockNumber > newPositionSet.positions.get(p.id).blockNumber) {
                newPositionSet.positions.set(p.id, p);
            }
        }
        return newPositionSet;
    }

    /*filter(opts) {
        return new PositionSet(Array.from(this.positions.values()).filter(p => {
            return true;
        }));
    }*/

    toString() {
        return `PositionSet(${this.positions.size})`;
    }

}

module.exports = PositionSet;