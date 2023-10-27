const { valueToBigNumber } = require("../utils");

class Position {

    constructor(v) {
        this.network = v.network;
        this.blockNumber = v.blockNumber;
        this.id = v.id;
        this.deposits = v.deposits;
        this.borrows = v.borrows;

        for (const d of this.deposits) {
            d.position = this;
        }
        for (const b of this.borrows) {
            b.position = this;
        }

        this.emodeCategoryKnown = false;
    }

    setEModeCategoryData(emodeCategoryData) {
        this.emodeCategoryKnown = true;
        this.emodeCategoryData = emodeCategoryData;
    }

    getDepositTotalUSDValue() {
        return this.deposits.reduce((sum, d) => sum.plus(d.getUSDValue()), valueToBigNumber(0));
    }

    getBorrowPowerTotalUSDValue() {
        return this.deposits.reduce((sum, d) => {
            // Use the e-mode LT if it's known, otherwise use the asset LT
            if (this.emodeCategoryData != null) {
                return sum.plus(d.getUSDValue().multipliedBy(this.emodeCategoryData.liquidationThreshold));
            } else {
                return sum.plus(d.getUSDBorrowPower());
            }
        }, valueToBigNumber(0));
    }

    getBorrowTotalUSDValue() {
        return this.borrows.reduce((sum, b) => sum.plus(b.getUSDValue()), valueToBigNumber(0));
    }

    getHealthFactor() {
        const borrowPower = this.getBorrowPowerTotalUSDValue();
        const borrow = this.getBorrowTotalUSDValue();
        return borrowPower.div(borrow);
    }

    toString() {
        return `${this.id} (B: $${this.getBorrowPowerTotalUSDValue().toFixed(0)}, HF: ${this.getHealthFactor().toFixed(4)})`;
    }

}

module.exports = Position;