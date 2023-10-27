class Borrow {

    constructor(v) {
        this.asset = v.asset;
        this.amount = v.amount;

        this.position = null;
    }

    getUSDValue() {
        return this.amount.multipliedBy(this.position.network.getReserve(this.asset).price);
    }

}

module.exports = Borrow;