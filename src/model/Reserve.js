class Reserve {

    constructor(v) {
        this.symbol = v.symbol;
        this.underlying = v.underlying;
        this.units = v.units;
        this.price = v.price;
    }

    toString() {
        return `${this.symbol} (${this.underlying}, Price: ${this.price.toFixed(2)})`;
    }

}

module.exports = Reserve;