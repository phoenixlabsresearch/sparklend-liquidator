class Reserve {

    constructor(v) {
        this.symbol = v.symbol;
        this.asset = v.asset;
        this.units = v.units;
        this.price = v.price;
        this.emode = v.emode;
        this.liquidityIndex = v.liquidityIndex;
        this.variableBorrowIndex = v.variableBorrowIndex;
        this.liquidationThreshold = v.liquidationThreshold;
    }

    toString() {
        return `${this.symbol} ${this.price.toFixed(2)}`;
    }

}

module.exports = Reserve;