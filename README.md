# Smart Contract deployment on public EVM networks

This repository provides practical example to deploy Smart Contracts in different public EVM networks, following different approaches:

## Testnet networks

### Ethereum Goerli (testnet) information

- **Network:** Ethereum Goerli 
- **New RPC URL:** https://goerli.infura.io/v3/
- **Chain ID:** 5
- **Currency symbol:** ETH
- **Block explorer:** https://goerli.etherscan.io/
- **Faucet:** https://goerlifaucet.com/

### Polygon Mumbai (testnet) information

- **Network:** Polygon Mumbai 
- **New RPC URL:** https://rpc-mumbai.maticvigil.com/
- **Chain ID:** 80001
- **Currency symbol:** MATIC
- **Block explorer:** https://mumbai.polygonscan.com/
- **Faucet:** https://faucet.polygon.technology/

More infor here: https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/

### Binance Smart Chain (testnet) information

- **Network:** Smart Chain - Testnet 
- **New RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
- **Chain ID:** 97
- **Currency symbol:** BNB
- **Block explorer:** https://testnet.bscscan.com
- **Faucet:** https://testnet.bnbchain.org/faucet-smart

More info here: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain


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


## Hardhat

#### Installation
```sh
npm init
npm install --save-dev hardhat
```

#### Deployment 
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/deploy.ts --network DESIRED_NETWORK
```

