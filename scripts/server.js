const LiquidationWatcher = require("./liquidationwatcher");
const hre = require("hardhat");
const moment = require("moment");

async function main() {
    await new LiquidationWatcher().run(str => console.log(`[${moment()}] ${str}`));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
