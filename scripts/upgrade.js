const { ethers } = require("hardhat");
const MYPROXYADMIN_ADDRESS = "0xF236D14e9D47941424449e6bF3AcbD2C596719b3";
const MYPROXY_ADDRESS = "0x1496d2F9FD4D40bfD962Bb3f4E00ebEAC91B3DEc";

async function main() {

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const boxV2 = await BoxV2.deploy();
    await boxV2.deployed();
    console.log("BoxV2 deployed to: ", boxV2.address);

    const myProxyAdmin = await ethers.getContractAt("MyProxyAdmin", MYPROXYADMIN_ADDRESS);
    await myProxyAdmin.upgrade(MYPROXY_ADDRESS, boxV2.address);
    console.log("Upgraded to BoxV2");

    
}
main();