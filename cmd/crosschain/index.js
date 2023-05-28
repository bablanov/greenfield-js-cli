const {crosschain} = require("../../methods");

const transferOut = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  if (!flags.amount) {
    console.error('You must add flag amount');
    return ;
  }

  const result = await crosschain.transferOut(flags.address, flags.amount);

  console.info(result.msg);
  console.info(result.data);
};

module.exports = {
  transferOut
}