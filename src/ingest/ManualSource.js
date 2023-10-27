const Deposit = require("../model/Deposit");
const Borrow = require("../model/Borrow");
const Position = require("../model/Position");
const PositionSet = require("../model/PositionSet");
const EModeCategory = require("../model/EModeCategory");
const BigNumber = require("bignumber.js");
const { valueToBigNumber } = require("../utils");

const RAY = new BigNumber(10).pow(27);

class ManualSource {

    constructor(network, ids) {
        this.network = network;
        this.ids = ids;
    }

    async multicall (calls, decoder) {
        const contract = await ethers.getContractAt("IMulticall", this.network.multicall);
        const results = (await contract.aggregate(calls)).returnData;
        return results.map(r => decoder(r));
    }

    async fetchAll() {
        const uiPoolDataProvider = await this.network.getUIPoolDataProvider();
        const blockNumber = await hre.ethers.provider.getBlock("latest").number;
        const userReservesData = await this.multicall(this.ids.map(id => {
            return [this.network.uiPoolDataProvider, uiPoolDataProvider.interface.encodeFunctionData("getUserReservesData", [this.network.poolAddressProvider, id])];
        }), r => uiPoolDataProvider.interface.decodeFunctionResult("getUserReservesData", r));

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