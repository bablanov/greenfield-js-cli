const client = require("../client");

async function listFunction(endpoint){
    const list = await client.bucket.getUserBuckets({
        address : process.env.ADDRESS,
        endpoint
    });

    return {
        msg : "Your buckets:",
        data : list
    }
}

module.exports = listFunction;