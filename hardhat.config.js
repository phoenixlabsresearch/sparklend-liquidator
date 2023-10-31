require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    local: {
      url: "http://127.0.0.1:8545/",
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001",
      accounts: [process.env.PRIVATE_KEY]
    },
    gnosis: {
      url: process.env.GNOSIS_CHAIN_RPC_URL || "https://rpc.ankr.com/gnosis",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
