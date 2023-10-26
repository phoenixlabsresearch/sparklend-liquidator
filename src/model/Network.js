const ReserveSource = require("../ingest/ReserveSource");

class Network {

    constructor(v) {
        this.name = v.name;
        this.theGraphEndpoint = v.theGraphEndpoint;
        this.readRpc = v.readRpc;
        this.writeRpc = v.writeRpc;
        this.poolAddressProvider = v.poolAddressProvider;
        this.uiPoolDataProvider = v.uiPoolDataProvider;
        this.liquidateLoan = v.liquidateLoan;
        this.reserves = [];
    }

    async getUIPoolDataProvider() {
        return await ethers.getContractAt("IUiPoolDataProviderV3", this.uiPoolDataProvider);
    }

    async refreshReserves() {
        this.reserves = await new ReserveSource(this).fetchAll();
    }

}

module.exports = Network;