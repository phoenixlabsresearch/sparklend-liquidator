const hre = require("hardhat");
const chainId = hre.network.config.chainId;
const addresses = chainId === 1 ?
    {
        LENDING_POOL_ADDRESS_PROVIDER: "",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "",
        LIQUIDATE_LOAN: "",
        DAI: "",
        sDAI: "",
        WETH: "",
        wstETH: "",
        WBTC: "",
    }
    :
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x26ca51Af4506DE7a6f0785D20CD776081a05fF6d",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0x0D56700c90a690D8795D6C148aCD94b12932f4E3",
        DSS_FLASH: "0xAa5F7d5b29Fa366BB04F6E4c39ACF569d5214075",
        LIQUIDATE_LOAN: "",
        DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
        sDAI: "0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C",
        WETH: "0xFa203eD22c58039e5A94B1170e2d8d9a3a264e2c",
        wstETH: "0xfB7acC0A6c832d9d517763a7947E1195b2a06d37",
        WBTC: "0xA15432e9e2e173d2656Bc3B0961d61bafBcfbB22",
    };

const {
    DAI,
    sDAI,
    WETH,
    wstETH,
    WBTC,
} = addresses;

const routes = chainId === 1 ?
    {
    }
    :
    {
        DAI: {
            DAI: ethers.utils.solidityPack([],[]),
            sDAI: ethers.utils.solidityPack([],[]),
            WETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,wstETH]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WBTC]),
        },
        sDAI: {
            DAI: ethers.utils.solidityPack([],[]),
            sDAI: ethers.utils.solidityPack([],[]),
            WETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,wstETH]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address"],[DAI,500,WBTC]),
        },
        WETH: {
            DAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,500,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,500,DAI]),
            WETH: ethers.utils.solidityPack([],[]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,wstETH]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WETH,500,DAI,500,WBTC]),
        },
        wstETH: {
            DAI: ethers.utils.solidityPack(["address","uint24","address"],[wstETH,500,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address"],[wstETH,500,DAI]),
            WETH: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[wstETH,500,DAI,500,WETH]),
            wstETH: ethers.utils.solidityPack([],[]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[wstETH,500,DAI,500,WBTC]),
        },
        WBTC: {
            DAI: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,500,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,500,DAI]),
            WETH: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,500,DAI,500,wstETH]),
            WBTC: ethers.utils.solidityPack([],[]),
        }
    };
module.exports = {
    addresses,
    routes,
};
