const ReserveSource = require("../ingest/ReserveSource");

class Network {

    constructor(config, v) {
        this.name = v.name;
        this.theGraphPrefix = v.theGraphPrefix;
        this.readRpc = v.readRpc;
        this.writeRpc = v.writeRpc;
        this.poolAddressProvider = v.poolAddressProvider;
        this.uiPoolDataProvider = v.uiPoolDataProvider;
        this.liquidateLoan = v.liquidateLoan;
        this.privateKey = v.privateKey != null ? v.prviateKey : config.account.privateKey;

        this.reserves = [];
    }

    getReadProvider() {
        return new ethers.Wallet(this.privateKey).connect(new ethers.providers.JsonRpcProvider(this.readRpc));
    }

    getWriteProvider() {
        return new ethers.Wallet(this.privateKey).connect(new ethers.providers.JsonRpcProvider(this.writeRpc));
    }

    async getUIPoolDataProvider() {
        return await ethers.getContractAt("IUiPoolDataProviderV3", this.uiPoolDataProvider, this.getReadProvider());
    }

    async getLoanLiquidator() {
        return await ethers.getContractAt("LiquidateLoan", this.liquidateLoan, this.getWriteProvider());
    }

    async init() {
        this.chainId = (await this.getReadProvider().provider.getNetwork()).chainId;
    }

    async refreshReserves() {
        this.reserves = await new ReserveSource(this).fetchAll();
    }

    getReserve(asset) {
        return this.reserves.find(r => r.asset.toLowerCase() === asset.toLowerCase());
    }

    toString() {
        return `${this.name}(${this.chainId})`;
    }

}

module.exports = Network;