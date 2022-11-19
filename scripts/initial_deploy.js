const { ethers } = require("hardhat");

async function main() {
    const MyProxyAdmin = await ethers.getContractFactory("MyProxyAdmin");
    const myProxyAdmin = await MyProxyAdmin.deploy();
    await myProxyAdmin.deployed();
    console.log("MyProxyAdmin deployed to: ", myProxyAdmin.address);

    const Box = await ethers.getContractFactory("Box");
    const box = await Box.deploy();
    await box.deployed();
    console.log("Box deployed to: ", box.address);

    const _data = "0x";
    const MyProxy = await ethers.getContractFactory("MyProxy");
    const myProxy = await MyProxy.deploy(box.address, myProxyAdmin.address, _data);
    await myProxy.deployed();
    console.log("MyProxy deployed to: ", myProxy.address);

    const myProxy2 = await ethers.getContractAt("Box", myProxy.address);
    myProxy2.initialize(50);

}
main();