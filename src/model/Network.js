const ReserveSource = require("../ingest/ReserveSource");

class Network {

    constructor(v) {
        this.name = v.name;
        this.theGraphPrefix = v.theGraphPrefix;
        this.readRpc = v.readRpc;
        this.writeRpc = v.writeRpc;
        this.poolAddressProvider = v.poolAddressProvider;
        this.uiPoolDataProvider = v.uiPoolDataProvider;
        this.liquidateLoan = v.liquidateLoan;
        this.reserves = [];
    }

    getReadProvider() {
        return new ethers.Wallet(hre.network.config.accounts[0]).connect(new ethers.providers.JsonRpcProvider(this.readRpc));
    }

    getWriteProvider() {
        return new ethers.Wallet(hre.network.config.accounts[0]).connect(new ethers.providers.JsonRpcProvider(this.writeRpc));
    }

    async getUIPoolDataProvider() {
        return await ethers.getContractAt("IUiPoolDataProviderV3", this.uiPoolDataProvider, this.getReadProvider());
    }

    async refreshReserves() {
        this.reserves = await new ReserveSource(this).fetchAll();
    }

    getReserve(asset) {
        return this.reserves.find(r => r.asset === asset);
    }

    toString() {
        return this.name;
    }

}

module.exports = Network;