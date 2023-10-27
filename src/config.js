module.exports = {
    networks: [
        {
            name: "Ethereum",
            theGraphPrefix: "ethereumPrimary",
            readRpc: hre.network.config.url,
            writeRpc: hre.network.config.url,
            multicall: "0x5e227AD1969Ea493B43F840cfF78d08a6fc17796",
            poolAddressProvider: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
            uiPoolDataProvider: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
            liquidateLoan: "0x0"
        },
        {
            name: "Gnosis Chain",
            theGraphPrefix: "gnosisPrimary",
            readRpc: "https://rpc.ankr.com/gnosis",
            writeRpc: "https://rpc.ankr.com/gnosis",
            multicall: "",
            poolAddressProvider: "0xA98DaCB3fC964A6A0d2ce3B77294241585EAbA6d",
            uiPoolDataProvider: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
            liquidateLoan: "0x0"
        }
    ]
};