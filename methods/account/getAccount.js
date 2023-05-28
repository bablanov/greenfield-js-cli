const client = require("../client");

async function getAccount(address){
    const account = await client.account.getAccount(address);
    return {
        msg : "Account info got successfully",
        data : account
    };
}

module.exports = getAccount;