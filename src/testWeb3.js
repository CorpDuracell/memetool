const Web3 = require('web3');

// Connect to an Ethereum node
const web3 = new Web3.default('https://mainnet.infura.io/v3/6d49d995f02243279ad27995bbfd1ea7');

// Get the latest block number
web3.eth.getBlockNumber().then(console.log);