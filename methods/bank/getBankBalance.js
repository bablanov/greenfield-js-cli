const client = require("../client");

async function getBankBalance(address){
    const accountBalance = await client.account.getAccountBalance({
        denom : "BNB",
        address : address
    });
    return {
        msg : "Account balance got successfully",
        data : accountBalance
    };
}

module.exports = getBankBalance;