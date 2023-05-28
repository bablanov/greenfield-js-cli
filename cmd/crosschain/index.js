const {crosschain} = require("../../methods");

const transferOut = async (flags) => {
  if (!flags.toAddress) {
    console.error('You must add flag toAddress');
    return ;
  }

  if (!flags.amount) {
    console.error('You must add flag amount');
    return ;
  }

  const result = await crosschain.transferOut(flags.toAddress, flags.amount);

  console.info(result.msg);
  console.info(result.data);
};

module.exports = {
  transferOut
}