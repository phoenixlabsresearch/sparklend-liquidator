const Reserve = require("../model/Reserve");
const EModeCategory = require("../model/EModeCategory");
const BigNumber = require("bignumber.js");
const { valueToBigNumber } = require("../utils");

const RAY = new BigNumber(10).pow(27);

class ReserveSource {

    constructor(network) {
        this.network = network;
    }

    async fetchAll() {
        const uiPoolDataProvider = await this.network.getUIPoolDataProvider();

        const [reserveDataArray, currencyInfo] = await uiPoolDataProvider.getReservesData(this.network.poolAddressProvider);
        return reserveDataArray.map(r => {
            return new Reserve({
                symbol: r.symbol,
                asset: r.underlyingAsset.toLowerCase(),
                units: new BigNumber(10).pow(valueToBigNumber(r.decimals)),
                price: valueToBigNumber(r.priceInMarketReferenceCurrency).div(valueToBigNumber(currencyInfo.marketReferenceCurrencyUnit)),
                emode: r.eModeCategoryId !== 0 ? new EModeCategory({
                    id: r.eModeCategoryId,
                    label: r.eModeLabel,
                    liquidationThreshold: valueToBigNumber(r.eModeLiquidationThreshold).div(10000)
                }) : null,
                liquidityIndex: valueToBigNumber(r.liquidityIndex).div(RAY),
                variableBorrowIndex: valueToBigNumber(r.variableBorrowIndex).div(RAY),
                liquidationThreshold: valueToBigNumber(r.reserveLiquidationThreshold).div(10000)
            });
        });
    }

}

module.exports = ReserveSource;