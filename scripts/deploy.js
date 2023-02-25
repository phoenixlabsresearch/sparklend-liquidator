// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const addresses = require("./constants").addresses;

async function main() {
    const LiquidateLoan = await hre.ethers.getContractFactory("LiquidateLoan");
    const liquidateLoan = await LiquidateLoan.deploy(
        addresses.LENDING_POOL_ADDRESS_PROVIDER,
        addresses.UNISWAPV3_ROUTER,
        addresses.TREASURY,
        addresses.DAI,
        addresses.SDAI,
        addresses.DSS_FLASH
    );

    await liquidateLoan.deployed();

    console.log(`LiquidateLoan deployed to ${liquidateLoan.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
