var Web3 = require('web3');
var EthereumTransaction = require('ethereumjs-tx');
var web3 = new Web3('HTTP://127.0.0.1:7545');

// Set Addresses
var sendingAddress = '0x52EAF418b29f364119D4bE8b27c86D5C91586f51';
var receivingAddress = '0xBac4FB6536078b12ab69dCd0598E0C40ca33098d';

// Create transaction
var rawTransaction = {
	nonce: 2,
	from: sendingAddress,
	to: receivingAddress,
	gasPrice: 20000000,
	gasLimit: 30000,
	value: 1,
	data: '',
};

// Sign Transaction
var privateKeySender = '';
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);

web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);
