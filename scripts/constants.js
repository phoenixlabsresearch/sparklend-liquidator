const hre = require("hardhat");
let chainId = hre.network.config.chainId;
chainId = 1;    // Override forked chainId
const addresses = 
    {
        LENDING_POOL_ADDRESS_PROVIDER: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
        LENDING_POOL: "0xC13e21B648A5Ee794902342038FF3aDAB66BE987",
        UI_POOL_DATA_PROVIDER: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
        MULTICALL_ADDRESS: "0x5e227AD1969Ea493B43F840cfF78d08a6fc17796",
        LIQUIDATE_LOAN: "0x83D546D03Cc912E979EcD2538c3FC98f379B2a94",
        AAVE_ORACLE: "0x8105f69D9C41644c6A0803fDA7D03Aa70996cFD9",
    };

module.exports = {
    addresses,
    chainId,
};
