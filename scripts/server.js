const LiquidationWatcher = require("./liquidationwatcher");
const hre = require("hardhat");
const moment = require("moment");

function log(str) {
    console.log(`[${moment()}] ${str}`);
}

async function main() {
    const rpc = hre.network.config.url;
    const executeRpc = hre.network.config.executeUrl;
    if (executeRpc) {
        log(`Using RPCs: ${rpc} / ${executeRpc} (Execute)`);
    } else {
        log(`Using RPC: ${rpc}`);
    }

    await new LiquidationWatcher().run(log);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
