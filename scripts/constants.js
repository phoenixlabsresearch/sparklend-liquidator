const hre = require("hardhat");
const chainId = hre.network.config.chainId;
const addresses = chainId === 1 ?
    {
        LENDING_POOL_ADDRESS_PROVIDER: "",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "",
        LIQUIDATE_LOAN: "",
        DAI: "",
        WETH: "",
        STETH: "",
        WBTC: "",
    }
    :
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x9a92018Def4fF783B2c0B3dc0F5F42D6078f5e4A",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0x6a9fA6bc314B194D4f9713F055827b7948DF8b1f",
        LIQUIDATE_LOAN: "0x9071E98f67a2ef9C71322a8F7f3fA2BAEa5F1AC8",
        DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844".toLowerCase(),
        WETH: "0xFa203eD22c58039e5A94B1170e2d8d9a3a264e2c".toLowerCase(),
        STETH: "0xfB7acC0A6c832d9d517763a7947E1195b2a06d37".toLowerCase(),
        WBTC: "0xA15432e9e2e173d2656Bc3B0961d61bafBcfbB22".toLowerCase(),
    };
const { DAI, WETH, STETH, WBTC } = addresses;
const routes = chainId === 1 ?
    {
    }
    :
    {
        [DAI]: {
            [DAI]: ethers.utils.solidityPack([],[]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WBTC]),
        },
        [WETH]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[WETH,500,DAI]),
            [WETH]: ethers.utils.solidityPack([],[]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,WBTC]),
        },
        [STETH]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[STETH,500,DAI]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[STETH,500,DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack([],[]),
            [WBTC]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[STETH,500,DAI,500,WBTC]),
        },
        [WBTC]: {
            [DAI]: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,500,DAI]),
            [WETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,WETH]),
            [STETH]: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,STETH]),
            [WBTC]: ethers.utils.solidityPack([],[]),
        }
    };
module.exports = {
    addresses,
    routes,
};
