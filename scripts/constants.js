const hre = require("hardhat");
const chainId = hre.network.config.chainId;
const addresses = chainId === 1 ?
    {
        LENDING_POOL_ADDRESS_PROVIDER: "",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: ""
    }
    :
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x5919a05a22d723A19FC13A84088b1F09663619D9",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0xfC363d1c6E692a3088ad9fcBd0e0634C4688d4eA",
    };

module.exports = {
    addresses,
};
