const client = require("../client");

async function transferOut(toAddress, amount){
    const transferTx = await client.crosschain.transferOut({
        amount : {
            amount : amount,
            denom : "BNB"
        },
        from : process.env.ADDRESS,
        to :toAddress
    });

    const simulateInfo = await transferTx.simulate({
        denom : "BNB"
    });

    const broadcast = await transferTx.broadcast({
        gasLimit : Number(simulateInfo?.gasLimit),
        gasPrice : simulateInfo?.gasPrice || "5000000000",
        granter : "",
        payer : process.env.ADDRESS,
        privateKey : `0x${process.env.PRIVATE_KEY}`,
        denom : "BNB"
    });

    return {
        msg : "Transfered to BSC chain was succeed",
        data : broadcast
    };
}

module.exports = transferOut;