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

module.exports = {
  getAccount
}