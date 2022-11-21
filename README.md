# transparentproxy2-hardhat
+ verify MyProxyAdmin: npx hardhat verify  --contract contracts/MyProxyAdmin.sol:MyProxyAdmin  --network testnet {address of MyProxyAdmin}
+ verify Box: npx hardhat verify  --contract contracts/Box.sol:Box  --network testnet {address of Box}
+ verify MyProxy: unfortunately you can't verify it using the command line
The following command will fail:
npx hardhat verify  --constructor-args scripts/arguments.js --contract contracts/MyProxy.sol:MyProxy --network testnet {MyProxy address}


+ sample of deployed addresses:

MyProxyAdmin deployed to:  0x2bD4e797b788E5318Ce86E47025C610D0Fa88076
Box deployed to:  0xde3Ff0AaFFB06ba2047a1756640D87184d70DA71
MyProxy deployed to:  0x54D5580C1bd1cA8Cf4B7dd1FE6F8ec6146F2Dd28

