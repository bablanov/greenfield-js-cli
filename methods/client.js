const { Client } = require("@bnb-chain/greenfield-chain-sdk")
const client = Client.create("https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org", 5600);

module.exports = client;