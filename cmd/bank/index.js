const {bank} = require("../../methods");

const getBank = async (flags) => {
  if (!flags.address) {
    console.error('You must add flag address');
    return ;
  }

  const result = await bank.getBank(flags.address);

  console.info(result.msg);
  console.info(result.data);
};

const getBankBalance = async (flags) => {
  if(!flags.address){
    console.log("Write an address!");
    return ;
  }

  const balance = await bank.getBankBalance(flags.address);

  console.log(balance.msg);
  console.log(balance.data);
}

const bankTransfer = async (flags) => {
  if(!flags.address){
    console.log("Write an address!");
    return;
  }

  if(!flags.amount){
    console.log("Write an amount!");
    return;
  }

  const transfer = await bank.bankTransfer(flags.address, flags.amount);

  console.log(transfer.msg);
  console.log(transfer.data);
}

module.exports = {
  getBank,
  getBankBalance,
  bankTransfer
}