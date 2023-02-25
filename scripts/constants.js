const hre = require("hardhat");
const chainId = hre.network.config.chainId;
const addresses = chainId === 1 ?
    {
        LENDING_POOL_ADDRESS_PROVIDER: "",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "",
        LIQUIDATE_LOAN: "",
        SDAI: "",
        DAI: "",
        WETH: "",
        STETH: "",
        WBTC: "",
    }
    :
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x5EEE318E5668d578b820d3C80152482E01fcE5cA",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0xB3866C2DCF96F0E2aB61f5f4709319be2F6eec7d",
        DSS_FLASH: "0xAa5F7d5b29Fa366BB04F6E4c39ACF569d5214075",
        LIQUIDATE_LOAN: "",
        DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
        SDAI: "0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C",
        WETH: "0xFa203eD22c58039e5A94B1170e2d8d9a3a264e2c",
        STETH: "0xfB7acC0A6c832d9d517763a7947E1195b2a06d37",
        WBTC: "0xA15432e9e2e173d2656Bc3B0961d61bafBcfbB22",
    };
const addressesLower = { ...addresses };
for (const key in addressesLower) {
    addressesLower[key] = addressesLower[key].toLowerCase();
}
const { DAI, SDAI, WETH, STETH, WBTC } = addressesLower;
const routes = chainId === 1 ?
    {
    }
    :
    {
        [DAI]: {
            [DAI]: ethers.utils.solidityPack([],[]),
            [SDAI]: ethers.utils.solidityPack([],[]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WBTC]),
        },
        [SDAI]: {
            [DAI]: ethers.utils.solidityPack([],[]),
            [SDAI]: ethers.utils.solidityPack([],[]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WBTC]),
        },
        [WETH]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[WETH,500,DAI]),
            [SDAI]: ethers.utils.solidityPack(["address","uint24","address"],[WETH,500,DAI]),
            [WETH]: ethers.utils.solidityPack([],[]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,WBTC]),
        },
        [STETH]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[STETH,500,DAI]),
            [SDAI]: ethers.utils.solidityPack(["address","uint24","address"],[STETH,500,DAI]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[STETH,500,DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack([],[]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[STETH,500,DAI,500,WBTC]),
        },
        [WBTC]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,500,DAI]),
            [SDAI]: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,500,DAI]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack([],[]),
        }
    };
module.exports = {
    addresses,
    routes,
};
