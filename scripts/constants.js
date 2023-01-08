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
        LENDING_POOL_ADDRESS_PROVIDER: "0x5919a05a22d723A19FC13A84088b1F09663619D9",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0xfC363d1c6E692a3088ad9fcBd0e0634C4688d4eA",
        LIQUIDATE_LOAN: "0x1867f878221D61d3741D61075e868c1352a8AB90",
        DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844".toLowerCase(),
        WETH: "0x68e4227B0bceFa1Bb586A57C7920F39aee520e94".toLowerCase(),
        STETH: "0x6744afDd7fd38dbB460A1705181B5Bf6e09f0c60".toLowerCase(),
        WBTC: "0x9a91f929b2ca5279a3deEAee7023471FAa7a5f03".toLowerCase(),
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
