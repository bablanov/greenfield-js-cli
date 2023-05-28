const client = require("../client");
async function transfer(toAddress, amount){
    const transferTx = await client.account.transfer({
        fromAddress : process.env.ADDRESS,
        toAddress : toAddress,
        amount : [{
            denom : "BNB",
            amount : amount
        }]
    });

    const stimulateInfo = await transferTx.simulate({
        denom : "BNB"
    });
    console.log(stimulateInfo)
    const broadcast = await transferTx.broadcast({
        gasLimit : Number(stimulateInfo?.gasLimit),
        gasPrice : stimulateInfo?.gasPrice || "5000000000",
        granter : "",
        payer : process.env.ADDRESS,
        privateKey : `0x${process.env.PRIVATE_KEY}`,
        denom : "BNB"
    });
    return {
        msg : "Transaction sent successfully!",
        data : broadcast
    };
}

module.exports = transfer;