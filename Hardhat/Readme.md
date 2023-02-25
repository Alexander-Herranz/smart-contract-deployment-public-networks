## Hardhat Guide

#### Installation
```sh
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
