class Reserve {

    constructor(v) {
        this.symbol = v.symbol;
        this.asset = v.asset;
        this.units = v.units;
        this.price = v.price;
        this.emode = v.emode;
    }

    toString() {
        return `${this.symbol} (${this.asset}, Price: ${this.price.toFixed(2)})`;
    }

}

module.exports = Reserve;