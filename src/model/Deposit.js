class Deposit {

    constructor(v) {
        this.asset = v.asset;
        this.amount = v.amount;
        this.liquidationThreshold = v.liquidationThreshold;

        this.position = null;
    }

    getUSDValue() {
        return this.amount.multipliedBy(this.position.network.getReserve(this.asset).price);
    }

    getUSDBorrowPower() {
        return this.getUSDValue().multipliedBy(this.liquidationThreshold);
    }

}

module.exports = Deposit;