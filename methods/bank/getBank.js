const client = require("../client");

async function getBank(address){
    const account = await client.account.getAccount(address);
    return {
        msg : "Account info got successfully",
        data : account
    };
}

module.exports = getBank;