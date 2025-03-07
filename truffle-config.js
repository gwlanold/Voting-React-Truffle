const path = require("path");
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: 5777
    },
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(`${process.env.MNEMONIC}`,"https://ropsten.infura.io/v3/febf99d6ebc84e9e82fe9c5432f46ac1")
    //   },
    //   network_id: 3
    // }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  },
};