const Reserve = require("../model/Reserve");
const BigNumber = require("bignumber.js");
const { valueToBigNumber } = require("../utils");

class ReserveSource {

    constructor(poolAddressProvider, uiDataProvider) {
        this.poolAddressProvider = poolAddressProvider;
        this.uiDataProvider = uiDataProvider;
    }

    async fetchAll() {
        const uiPoolDataProviderV3 = await ethers.getContractAt("IUiPoolDataProviderV3", this.uiDataProvider);

        const [reserveDataArray, currencyInfo] = await uiPoolDataProviderV3.getReservesData(this.poolAddressProvider);
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