const {account} = require("../../methods");

const getAccount = async (address) => {
  const result = await account.getAccount(address);
  console.log('result', result);
};

module.exports = {
  getAccount
}