const OneInch = require("../swap/OneInch");
const { retry } = require("../Utils");

class OneInchLiquidation {

    constructor(position) {
        this.position = position;
    }

    async execute() {
        const params = this.position.getLiquidationParams();
        const swapData = await (new OneInch(this.position.network)).fetchSwapData(
            params.collateral.asset,
            params.toLiquidate.asset,
            params.toLiquidate.collateralToLiquidate
        );
        const args = [
            params.toLiquidate.asset,
            liquidationParams.debtToCover.multipliedBy(params.toLiquidate.getReserve().units).toFixed(0),
            params.collateral.asset,
            position.id,
            swapData.to,
            swapData.data,
        ];
        const liquidator = this.position.network.getLoanLiquidator();
        const signer = this.position.network.getWriteProvider();
        const nonce = await signer.getTransactionCount();
        let gasLimitEstimate = 2000000;
        try {
            gasLimitEstimate = await liquidator.estimateGas.executeFlashLoans(
                ...args
            );
        } catch (e) {
            throw new Error(`Gas Estimate Failed. Reason = ${e.reason}`);
        }
        return await retry(async (attempts) => {
            const feeData = await ethers.provider.getFeeData();
            const overrides = {
                gasLimit: gasLimitEstimate * 2,
                maxFeePerGas: feeData.maxFeePerGas,
                maxPriorityFeePerGas: feeData.maxPriorityFeePerGas.mul(2 ** attempts),
                nonce
            };
            return await liquidator.executeFlashLoans(
                ...args,
                overrides
            );
        }, (err) => {
            if (err.code === 'REPLACEMENT_UNDERPRICED') {
                return true;
            }
        }, 1000, 100);
    }

}

module.exports = OneInchLiquidation;