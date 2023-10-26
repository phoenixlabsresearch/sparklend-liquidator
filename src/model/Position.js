class Position {

    constructor(blockNumber, id, deposits, borrows) {
        this.blockNumber = blockNumber;
        this.id = id;
        this.deposits = deposits;
        this.borrows = borrows;
        this.emodeCategoryKnown = false;
    }

    setEModeCategoryData(emodeCategoryData) {
        this.emodeCategoryKnown = true;
        this.emodeCategoryData = emodeCategoryData;
    }

    toString() {
        let emode = "Unknown";
        if (this.emodeCategoryKnown) {
            emode = this.emodeCategoryData.name;
        }
        return `${this.id} (Deposits: ${this.deposits.length}, Borrows: ${this.borrows.length}, E-mode: ${emode})`;
    }

}

module.exports = Position;