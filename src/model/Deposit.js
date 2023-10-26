class Deposit {

    constructor(underlying, amount, liquidationThreshold) {
        this.underlying = underlying;
        this.amount = amount;
        this.liquidationThreshold = liquidationThreshold;
    }

}

module.exports = Deposit;