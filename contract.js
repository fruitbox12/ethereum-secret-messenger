let Web3 = require('web3');
let web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth.getTransactionCount('0x52EAF418b29f364119D4bE8b27c86D5C91586f51').then(console.log);
