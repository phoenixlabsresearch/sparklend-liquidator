const fs = require('fs/promises');
const Deposit = require("../model/Deposit");
const Borrow = require("../model/Borrow");
const Position = require("../model/Position");
const PositionSet = require("../model/PositionSet");
const EModeCategory = require("../model/EModeCategory");
const BigNumber = require("bignumber.js");

const RAY = new BigNumber(10).pow(27);

async function readAllFiles(dir) {
    const files = await fs.readdir(dir);
    return Promise.all(files
        .filter(file => file.endsWith('.json'))
        .map(async file => JSON.parse(await fs.readFile(`${dir}/${file}`, 'utf8')))
    );
}

class ManualSource {

    constructor(poolAddressProvider, uiDataProvider, dir = "./data") {
        this.poolAddressProvider = poolAddressProvider;
        this.uiDataProvider = uiDataProvider;
        this.dir = dir;
    }

    async fetchAll() {
        let ids = (await readAllFiles()).flatMap(f => {
            return Object.values(f);
        });

        const uiPoolDataProviderV3 = await ethers.getContractAt("IUiPoolDataProviderV3", this.dataProvider);
        const userReservesData = await multicall(ids.map(id => {
            return [this.dataProvider, uiPoolDataProviderV3.interface.encodeFunctionData("getUserReservesData", [this.poolAddressProvider, id])];
        }), r => uiPoolDataProviderV3.interface.decodeFunctionResult("getUserReservesData", r));

        return new PositionSet(ids.map((id, i) => {
            const userReserveData = userReservesData[i][0];
            const emodeCategory = userReservesData[i][1];
            let emodeCategoryData = null;

            const deposits = [];
            const borrows = [];
            
            userReserveData.forEach(rd => {
                const scaledATokenBalance = valueToBigNumber(u.scaledATokenBalance);
                const scaledVariableDebt = valueToBigNumber(u.scaledVariableDebt);
                const liquidityIndex = valueToBigNumber(reserve.liquidityIndex).div(RAY);
                const variableBorrowIndex = valueToBigNumber(reserve.variableBorrowIndex).div(RAY);

                if (scaledATokenBalance.isGreaterThan(0) && rd.usageAsCollateralEnabledOnUser) {
                    deposits.push(new Deposit(
                        rd.underlyingAsset.toLowerCase(),
                        scaledATokenBalance.multipliedBy(liquidityIndex),
                        valueToBigNumber(rd.liquidationThreshold).div(10000)
                    ));
                }
                if (scaledVariableDebt.isGreaterThan(0)) {
                    borrows.push(new Borrow(
                        rd.underlyingAsset.toLowerCase(),
                        scaledVariableDebt.multipliedBy(variableBorrowIndex)
                    ));
                }
                if (emodeCategory != 0 && rd.eModeCategoryId === emodeCategory) {
                    emodeCategoryData = new EModeCategory(
                        emodeCategory,
                        rd.eModeLabel,
                        valueToBigNumber(rd.liquidationThreshold).div(10000)
                    );
                }
            });

            const position = new Position(
                id.toLowerCase(),
                deposits,
                borrows
            );
            // Even if it's null we know the category is disabled rather than unknown
            position.setEModeCategoryData(emodeCategoryData);
            return position;
        }));
    }

}

module.exports = ManualSource;