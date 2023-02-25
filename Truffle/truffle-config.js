const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
require("dotenv").config();

const private_key = process.env.SIGNER_PRIVATE_KEY;

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETH_SCAN_API_KEY,
    polygonscan: process.env.POLYGON_SCAN_API_KEY,
    bscscan: process.env.BSC_SCAN_API_KEY
  },
  networks: {
    ethereum_goerli_testnet: {
      provider: () => new HDWalletProvider(private_key, process.env.ETH_GOERLI_TESTNET_RPC),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon_mumbai_testnet: {
      provider: () => new HDWalletProvider(private_key, process.env.POLYGON_MUMBAI_TESTNET_RPC),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    binance_bsc_testnet: {
      provider: () => new HDWalletProvider(private_key, process.env.BSC_TESTNET_RPC),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.1",
      parser: "solcjs",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
}
