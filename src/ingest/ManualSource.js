const Deposit = require("../model/Deposit");
const Borrow = require("../model/Borrow");
const Position = require("../model/Position");
const PositionSet = require("../model/PositionSet");
const BigNumber = require("bignumber.js");
const { valueToBigNumber } = require("../utils");

const RAY = new BigNumber(10).pow(27);

class ManualSource {

    constructor(network, ids) {
        this.network = network;
        this.ids = ids;
    }

    async fetchAll() {
        const uiPoolDataProvider = await this.network.getUIPoolDataProvider();
        // Using https://github.com/mds1/multicall
        const multicall = await ethers.getContractAt("IMulticall", "0xcA11bde05977b3631167028862bE2a173976CA11", this.network.getReadProvider());
        const calls = this.ids.map(id => {
            return [this.network.uiPoolDataProvider, uiPoolDataProvider.interface.encodeFunctionData("getUserReservesData", [this.network.poolAddressProvider, id])];
        });
        const mcresults = await multicall.aggregate(calls);
        const blockNumber = valueToBigNumber(mcresults.blockNumber).toNumber();
        const userReservesData = mcresults.returnData.map(r => uiPoolDataProvider.interface.decodeFunctionResult("getUserReservesData", r));

        const positions = this.ids.map((id, i) => {
            const userReserveData = userReservesData[i][0];
            const emodeCategory = userReservesData[i][1];
            let emodeCategoryData = null;

            const deposits = [];
            const borrows = [];
            
            userReserveData.forEach(rd => {
                const scaledATokenBalance = valueToBigNumber(rd.scaledATokenBalance);
                const scaledVariableDebt = valueToBigNumber(rd.scaledVariableDebt);
                const liquidityIndex = valueToBigNumber(rd.liquidityIndex).div(RAY);
                const variableBorrowIndex = valueToBigNumber(rd.variableBorrowIndex).div(RAY);
                const asset = rd.underlyingAsset.toLowerCase();
                const reserve = this.network.getReserve(asset);

                if (scaledATokenBalance.isGreaterThan(0) && rd.usageAsCollateralEnabledOnUser) {
                    deposits.push(new Deposit({
                        asset: asset,
                        amount: scaledATokenBalance.multipliedBy(liquidityIndex).div(this.network.getReserve(asset).units),
                        liquidationThreshold: valueToBigNumber(rd.liquidationThreshold).div(10000)
                    }));
                }
                if (scaledVariableDebt.isGreaterThan(0)) {
                    borrows.push(new Borrow({
                        asset: asset,
                        amount: scaledVariableDebt.multipliedBy(variableBorrowIndex).div(this.network.getReserve(asset).units)
                    }));
                }
                if (emodeCategory != 0 && reserve.emode?.id === emodeCategory) {
                    emodeCategoryData = reserve.emode;
                }
            });

            const position = new Position({
                network,
                blockNumber,
                id: id.toLowerCase(),
                deposits,
                borrows
            });
            // Even if it's null we know the category is disabled rather than unknown
            position.setEModeCategoryData(emodeCategoryData);
            return position;
        });

        return new PositionSet(positions);
    }

}

module.exports = ManualSource;