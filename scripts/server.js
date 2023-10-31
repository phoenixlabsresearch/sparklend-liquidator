const Daemon = require("../src/Daemon");
const hre = require("hardhat");
const moment = require("moment");

function log(str) {
    console.log(`[${moment()}] ${str}`);
}

async function main() {
    await new Daemon(log).run();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
