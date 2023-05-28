const {account} = require("../../methods");

const getAccount = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await account.getAccount(flags.address);

  console.info(result.msg);
  console.info(result.data);
};

const getAccountBalance = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await account.getAccountBalance(flags.address);

  console.info(result.msg);
  console.info(result.data);
};

const transfer = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await account.transfer(flags.address, flags.amount);

  console.info(result.msg);
  console.info(result.data);
};

module.exports = {
  getAccount,
  getAccountBalance,
  transfer,
}