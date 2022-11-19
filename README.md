# transparentproxy2-hardhat
+ verify MyProxyAdmin: npx hardhat verify  --contract contracts/MyProxyAdmin.sol:MyProxyAdmin  --network testnet {address of MyProxyAdmin}
+ verify Box: npx hardhat verify  --contract contracts/Box.sol:Box  --network testnet {address of Box}
+ verify MyProxy: unfortunately you can't verify it using the command line
The following command will fail:
npx hardhat verify  --constructor-args scripts/arguments.js --contract contracts/MyProxy.sol:MyProxy --network testnet {MyProxy address}


+ sample of deployed addresses:
MyProxyAdmin:   0xF236D14e9D47941424449e6bF3AcbD2C596719b3
Box:            0x73ff7AF00db0a83E98C29EC8117Ec17063e4FA32
MyProxy:        0x1496d2F9FD4D40bfD962Bb3f4E00ebEAC91B3DEc
BoxV2:          0x22F7608A78491a3B2C2b88646c86Ce0D5125b2cc

