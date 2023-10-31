function getConfig() {
    return {
        name: 'local',
        account: {
            privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
        },
        networks: [
            {
                name: "Ethereum",
                theGraphPrefix: "ethereumPrimary",
                readRpc: "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001",
                writeRpc: "http://127.0.0.1:8545",
                poolAddressProvider: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
                uiPoolDataProvider: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
                liquidateLoan: "0x47f564abAE443de9482c20a3e1f22fA1519DfC31"
            },
            {
                name: "Gnosis Chain",
                theGraphPrefix: "gnosisPrimary",
                readRpc: "https://rpc.ankr.com/gnosis",
                writeRpc: "https://rpc.ankr.com/gnosis",
                poolAddressProvider: "0xA98DaCB3fC964A6A0d2ce3B77294241585EAbA6d",
                uiPoolDataProvider: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
                liquidateLoan: "0xDae2E68beEb5686e48DEB03c8886417fF76d84C3"
            }
        ],
        oneinch: {
            url: "https://api.1inch.io",
            apiKey: "XXX"
        },
    }
}

module.exports = {
    getConfig
};
