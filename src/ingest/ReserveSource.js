const Reserve = require("../model/Reserve");
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
                underlying: r.underlyingAsset.toLowerCase(),
                units: new BigNumber(10).pow(valueToBigNumber(r.decimals)),
                price: valueToBigNumber(r.priceInMarketReferenceCurrency).div(valueToBigNumber(currencyInfo.marketReferenceCurrencyUnit))
            });
        });
    }

}

module.exports = ReserveSource;