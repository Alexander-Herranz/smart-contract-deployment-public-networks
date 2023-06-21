# Smart Contract deployment on public EVM networks

This repository provides practical example to deploy Smart Contracts in different public EVM networks, following different approaches:

## Prerequisites
Node JS installed: https://nodejs.org/

DESIRED_NETWORK variable can be: 
- ethereum_goerli_testnet
- polygon_mumbai_testnet
- binance_bsc_testnet

These networks are specified in networks section in both files (you can add new ones):
- Truffle/truffle-config.js
- Hardhat/hardhat.config.ts

If you have problems with RPC URLs (they change from time to time) check last ones here: https://rpc.info/


## Testnet networks


### Ethereum 2.0 (POS) testnet (Sepolia )

- **Network:** Ethereum Goerli
- **New RPC URL:** https://sepolia.infura.io/v3/
- **Chain ID:** 11155111
- **Currency symbol:** SepoliaETH
- **Block explorer:** https://sepolia.etherscan.io/
- **Faucet:** https://sepoliafaucet.com/

### Polygon Mumbai (testnet) 

- **Network:** Polygon Mumbai
- **New RPC URL:** https://rpc-mumbai.maticvigil.com/
- **Chain ID:** 80001
- **Currency symbol:** MATIC
- **Block explorer:** https://mumbai.polygonscan.com/
- **Faucet:** https://faucet.polygon.technology/

More info here: https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/

### Binance Smart Chain (testnet) information

- **Network:** Smart Chain - Testnet
- **New RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
- **Chain ID:** 97
- **Currency symbol:** BNB
- **Block explorer:** https://testnet.bscscan.com
- **Faucet:** https://testnet.bnbchain.org/faucet-smart

More info here: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain


### Ethereum 1.0 Goerli (POW) testnet [To be deprecated]

- **Network:** Ethereum Goerli
- **New RPC URL:** https://goerli.infura.io/v3/
- **Chain ID:** 5
- **Currency symbol:** GoerliETH
- **Block explorer:** https://goerli.etherscan.io/
- **Faucet:** https://goerlifaucet.com/


## Truffle
#### Installation
```sh
npm install -g truffle
cd Truffle
npm i
```

#### Deployment
```sh
truffle compile
truffle migrate --network DESIRED_NETWORK
```

#### Verification
```sh
truffle run verify DEPLOYED_CONTRACT_NAME@DEPLOYED_CONTRACT_ADDRESS --network DESIRED_NETWORK
```

#### Example with Goerli Network
```sh
truffle compile
truffle migrate --network ethereum_goerli_testnet
truffle run verify Notarization@0x... --network ethereum_goerli_testnet
```


## Hardhat

#### Installation
```sh
cd Hardhat
npm install
```

#### Deployment
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/deploy.ts --network DESIRED_NETWORK
```

#### Verification
```sh
npx hardhat verify --network DESIRED_NETWORK DEPLOYED_CONTRACT_ADDRESS
```

#### Example with Goerli Network
```sh
npx hardhat run ./scripts/deploy.ts --network ethereum_goerli_testnet
npx hardhat verify --network ethereum_goerli_testnet 0x...

```


## Remix

#### Metamask: Network selection
You have to select your preffered network form Metamask.

<img src="https://ik.imagekit.io/alastria/selection_of_alastria_network.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492649058" alt="Metamask1" width="400">


#### Remix: Deployment (left side)
Just click on the "Deploy" button when your Smart Contract is ready.

<img src="https://ik.imagekit.io/alastria/Remix-deploy?ik-sdk-version=javascript-1.4.3&updatedAt=1654784727263" alt="Remix1" width="400">


#### Metamask: Confirm transaction
You have to confirm the transaction of the Smart Contract deployment.

<img src="https://ik.imagekit.io/alastria/metamask_confirmation.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492665353" alt="Metamask2" width="400">


#### Functions overview in Remix (left side)
You will see an overview of the public/external functions of your already deployed Smart Contract.

<img src="https://ik.imagekit.io/alastria/functions_overview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492696364" alt="Remix2" width="400">


#### Functions execution in Remix (left side)
You can directly execute your Smart Contract functions from the Remix web IDE for test purposes.

<img src="https://ik.imagekit.io/alastria/functions_execution.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492681737" alt="Remix3" width="400">
