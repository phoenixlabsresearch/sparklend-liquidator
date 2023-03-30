const hre = require("hardhat");
let chainId = hre.network.config.chainId;
chainId = 1;    // Goerli not really working so just force mainnet
const addresses = chainId === 1 ?
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
        LENDING_POOL: "0xC13e21B648A5Ee794902342038FF3aDAB66BE987",
        UI_POOL_DATA_PROVIDER: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
        MULTICALL_ADDRESS: "0x5e227AD1969Ea493B43F840cfF78d08a6fc17796",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0xb137E7d16564c81ae2b0C8ee6B55De81dd46ECe5",
        DSS_FLASH: "0x60744434d6339a6B27d73d9Eda62b6F66a0a04FA",
        LIQUIDATE_LOAN: "0xa8fC41696F2a230b03F77d258Db39069e9e55F56",
        DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        sDAI: "0x83f20f44975d03b1b09e64809b757c47f942beea",
        WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        wstETH: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        stETHCurvePool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
        AAVE_ORACLE: "0x8105f69D9C41644c6A0803fDA7D03Aa70996cFD9",
    }
    :
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x26ca51Af4506DE7a6f0785D20CD776081a05fF6d",
        LENDING_POOL: "0x26ca51Af4506DE7a6f0785D20CD776081a05fF6d",
        UI_POOL_DATA_PROVIDER: "0x36eddc380C7f370e5f05Da5Bd7F970a27f063e39",
        MULTICALL_ADDRESS: "",
        UNISWAPV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        TREASURY: "0x0D56700c90a690D8795D6C148aCD94b12932f4E3",
        DSS_FLASH: "0xAa5F7d5b29Fa366BB04F6E4c39ACF569d5214075",
        LIQUIDATE_LOAN: "",
        DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
        sDAI: "0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C",
        WETH: "0xFa203eD22c58039e5A94B1170e2d8d9a3a264e2c",
        wstETH: "0xfB7acC0A6c832d9d517763a7947E1195b2a06d37",
        WBTC: "0xA15432e9e2e173d2656Bc3B0961d61bafBcfbB22",
        stETHCurvePool: "",
        AAVE_ORACLE: "",
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
        DAI: {
            DAI: ethers.utils.solidityPack([],[]),
            sDAI: ethers.utils.solidityPack([],[]),
            WETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,3000,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,3000,WETH]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[DAI,3000,WETH,3000,WBTC]),
        },
        sDAI: {
            DAI: ethers.utils.solidityPack([],[]),
            sDAI: ethers.utils.solidityPack([],[]),
            WETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,3000,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address"],[DAI,3000,WETH]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[DAI,3000,WETH,3000,WBTC]),
        },
        WETH: {
            DAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,DAI]),
            WETH: ethers.utils.solidityPack([],[]),
            wstETH: ethers.utils.solidityPack([],[]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,WBTC]),
        },
        wstETH: {
            DAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,DAI]),
            WETH: ethers.utils.solidityPack([],[]),
            wstETH: ethers.utils.solidityPack([],[]),
            WBTC: ethers.utils.solidityPack(["address","uint24","address"],[WETH,3000,WBTC]),
        },
        WBTC: {
            DAI: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,3000,WETH,3000,DAI]),
            sDAI: ethers.utils.solidityPack(["address","uint24","address","uint24","address"],[WBTC,3000,WETH,3000,DAI]),
            WETH: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,3000,WETH]),
            wstETH: ethers.utils.solidityPack(["address","uint24","address"],[WBTC,3000,WETH]),
            WBTC: ethers.utils.solidityPack([],[]),
        }
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
