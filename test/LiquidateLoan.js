const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const addresses = require("../scripts/constants").addresses;

describe("LiquidateLoan", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deploy() {
        const LiquidateLoan = await ethers.getContractFactory("LiquidateLoan");
        const liquidateLoan = await LiquidateLoan.deploy(
            addresses.LENDING_POOL_ADDRESS_PROVIDER,
            addresses.UNISWAPV3_ROUTER,
            addresses.TREASURY
        );
    
        return { liquidateLoan };
    }

    describe("Deployment", function () {
        it("Should set the constructor properties correctly", async function () {
            const { liquidateLoan } = await loadFixture(deploy);
            
            //expect(await liquidateLoan.provider()).to.equal(addresses.LENDING_POOL_ADDRESS_PROVIDER);
            //expect(await liquidateLoan.lendingPool()).to.equal();
            expect(await liquidateLoan.uniswapV3Router()).to.equal(addresses.UNISWAPV3_ROUTER);
            expect(await liquidateLoan.treasury()).to.equal(addresses.TREASURY);
        });
    });

    /*describe("Liquidate", function () {
        const LIQUIDATION_ACCOUNT = "0xAC2D2F6D4161A4b9fF14F64187c4252683DD5B09";

        it("Should be able to liquidate", async function () {
            const { liquidateLoan } = await loadFixture(deploy);

            liquidateLoan.executeFlashLoans(
                addresses.STETH,

            )

            // Transactions are sent using the first signer by default
            await time.increaseTo(unlockTime);

            await expect(lock.withdraw()).not.to.be.reverted;
        });
    });*/
});
