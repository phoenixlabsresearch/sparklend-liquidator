class Borrow {

    constructor(v) {
        this.asset = v.asset;
        this.amount = v.amount;

        this.position = null;
    }

    getUSDValue() {
        return this.amount.multipliedBy(this.position.network.getReserve(this.asset).price);
    }

    getReserve() {
        return this.position.network.getReserve(this.asset);
    }

}

module.exports = Borrow;