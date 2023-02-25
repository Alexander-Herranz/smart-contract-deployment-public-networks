## Truffle Guide

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
