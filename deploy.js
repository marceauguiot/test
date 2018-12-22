const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'wink trigger obvious give crater ask april model broken burst degree same',
  'https://rinkeby.infura.io/v3/97a7c6745959426bb6c7a1d0800e8fe8'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attenpting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data : bytecode })
    .send({gas : '1000000', from : accounts[0] });

    console.log(interface);
    console.log('Contract deployed to', result.options.address );
};
deploy();
