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
        DAI: "0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844",
        WETH: "0x68e4227b0bcefa1bb586a57c7920f39aee520e94",
        STETH: "0x6744afdd7fd38dbb460a1705181b5bf6e09f0c60",
        WBTC: "0x9a91f929b2ca5279a3deeaee7023471faa7a5f03",
    };

module.exports = {
    addresses,
};
