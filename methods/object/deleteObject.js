const client = require("../client");

async function deleteObject(bucketName, objectName){
    const obj = await client.object.deleteObject({
        operator : process.env.ADDRESS,
        bucketName,
        objectName
    });
    const simulate = await obj.simulate({denom : "BNB"});
    const broadcast = await obj.broadcast({
        denom : "BNB",
        granter : "",
        gasPrice : simulate?.gasPrice || "5000000000",
        gasLimit : Number(simulate?.gasLimit),
        payer : process.env.ADDRESS,
        privateKey : `0x${process.env.PRIVATE_KEY}`
    });

    return {
        msg : "Object deleted successfully!",
        data : broadcast
    };
}

module.exports = deleteObject;