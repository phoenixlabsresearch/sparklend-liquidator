class Deposit {

    constructor(v) {
        this.asset = v.asset;
        this.amount = v.amount;

        this.position = null;
    }

    getUSDValue() {
        return this.amount.multipliedBy(this.position.network.getReserve(this.asset).price);
    }

    getUSDBorrowPower() {
        return this.getUSDValue().multipliedBy(this.liquidationThreshold);
    }

    getReserve() {
        return this.position.network.getReserve(this.asset);
    }

    get liquidationThreshold() {
        if (this.position.emodeCategoryData != null) {
            return this.position.emodeCategoryData.liquidationThreshold;
        } else {
            return this.getReserve().liquidationThreshold;
        }
    }

    get liquidationBonus() {
        if (this.position.emodeCategoryData != null) {
            return this.position.emodeCategoryData.liquidationBonus;
        } else {
            return this.getReserve().liquidationBonus;
        }
    }

}

module.exports = Deposit;