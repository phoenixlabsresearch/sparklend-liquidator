// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const LENDING_POOL_ADDRESS_PROVIDER = "0x5919a05a22d723A19FC13A84088b1F09663619D9";
const UNISWAPV3_ROUTER = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const TREASURY = "0xfC363d1c6E692a3088ad9fcBd0e0634C4688d4eA";

async function main() {
    const LiquidateLoan = await hre.ethers.getContractFactory("LiquidateLoan");
    const liquidateLoan = await LiquidateLoan.deploy(
        LENDING_POOL_ADDRESS_PROVIDER,
        UNISWAPV3_ROUTER,
        TREASURY
    );

    await lock.deployed();

    console.log(`LiquidateLoan deployed to ${liquidateLoan.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
