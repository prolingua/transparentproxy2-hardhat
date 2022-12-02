# transparentproxy2-hardhat
+ install dependencies: npm install
+ compile: npx hardhat compile
+ deploy Box, MyProxyAdmin, MyProxy: npx hardhat run scripts/initial_deploy.js --network testnet
+ upgrade to BoxV2: npm hardhat run scripts/upgrades.js --network testnet
+ verify MyProxyAdmin: npx hardhat verify  --contract contracts/MyProxyAdmin.sol:MyProxyAdmin  --network testnet {address of MyProxyAdmin}
+ verify Box: npx hardhat verify  --contract contracts/Box.sol:Box  --network testnet {address of Box}
+ verify BoxV2 npx hardhat verify --contract contracts/Box4.sol:BoxV2 --network testnet {address of BoxV2}
+ verify MyProxy: 
Unfortunately you can't verify it using the command line.
The following command will fail:
npx hardhat verify  --constructor-args scripts/arguments.js --contract contracts/MyProxy.sol:MyProxy --network testnet {MyProxy address}


+ sample of deployed addresses:

MyProxyAdmin deployed to:  0xF236D14e9D47941424449e6bF3AcbD2C596719b3
Box deployed to:  0x73ff7af00db0a83e98c29ec8117ec17063e4fa32
MyProxy deployed to:  0x1496d2F9FD4D40bfD962Bb3f4E00ebEAC91B3DEc
BoxV2 deployed to: 0x22f7608a78491a3b2c2b88646c86ce0d5125b2cc


