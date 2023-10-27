const Reserve = require("../model/Reserve");
const EModeCategory = require("../model/EModeCategory");
const BigNumber = require("bignumber.js");
const { valueToBigNumber } = require("../utils");

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
                }) : null
            });
        });
    }

}

module.exports = ReserveSource;