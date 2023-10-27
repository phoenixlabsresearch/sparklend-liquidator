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

    getLargestDeposit() {
        return this.deposits.reduce((largest, d) => {
            if (largest == null) {
                return d;
            } else if (d.getUSDValue().isGreaterThan(largest.getUSDValue())) {
                return d;
            } else {
                return largest;
            }
        }, null);
    }

    getLargestBorrow() {
        return this.borrows.reduce((largest, b) => {
            if (largest == null) {
                return b;
            } else if (b.getUSDValue().isGreaterThan(largest.getUSDValue())) {
                return b;
            } else {
                return largest;
            }
        }, null);
    }

    getLiquidationParams() {
        // Using logic from https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/libraries/logic/LiquidationLogic.sol#L466
        const collateral = this.getLargestDeposit();
        const debt = this.getLargestBorrow();
        const healthFactor = this.getHealthFactor();
        const healthFactorThreshold = 0.95;     // Below this threshold the entire position is liquidated
    
        let debtToCover = debt.amount;
        let collateralToLiquidate;
        if (healthFactor.isGreaterThan(healthFactorThreshold)) {
            debtToCover = debtToCover.div(2);
        }
        const baseCollateral = debt.getReserve().price.multipliedBy(debtToCover)
            .div(collateral.getReserve().price);
        // FIXME this needs to take e-mode into account
        const maxCollateralToLiquidate = baseCollateral.multipliedBy(collateral.liquidationThreshold);
    
        if (maxCollateralToLiquidate.isGreaterThan(collateral.amount)) {
            // Amount needed > amount available
            maxCollateralToLiquidate = collateral.amount;
            debtToCover = collateral.getReserve().price.multipliedBy(maxCollateralToLiquidate)
                .div(debt.getReserve().price).div(collateral.reserveLiquidationBonus);
        } else {
            // There is enough collateral available
            collateralToLiquidate = maxCollateralToLiquidate;
        }
    
        return {
            collateral,
            toLiquidate,
            collateralToLiquidate: collateralToLiquidate.div(1.01),     // FIXME - this should not be some hard coded number to make sure collateral we get back > DEX swap amount
            debtToCover
        };
    }

    toString() {
        return `${this.id} (B: $${this.getBorrowPowerTotalUSDValue().toFixed(0)}, HF: ${this.getHealthFactor().toFixed(4)})`;
    }

}

module.exports = Position;