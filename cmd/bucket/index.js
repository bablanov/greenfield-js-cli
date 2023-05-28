const {bucket} = require("../../methods");

const createBucket = async (flags) => {
    if(!flags.bucketName){
        console.log("Write an bucket name!");
        return;
    }
    const result = await bucket.createBucket(flags.bucketName, flags.type);

    console.log(result.msg);
    console.log(result.data)
}

const findById = async (flags) => {
    if(!flags.id){
        console.log("Write an ID!");
        return;
    }
    const result = await bucket.getBucketById(flags.id);

    console.log(result.msg)
    console.log(result.data)
}

const findByName = async (flags) => {
    if(!flags.bucketName){
        console.log("Write an bucket name!");
        return;
    }
    const result = await bucket.getBucketByName(flags.bucketName);

    console.log(result.msg);
    console.log(result.data);
}

const deleteBucket = async (flags) => {
    if(!flags.bucketName){
        console.log("Write an bucket name!");
        return;
    }

    const result = await bucket.deleteBucket(flags.bucketName);

    console.log(result.msg);
    console.log(result.data);
}

const listBuckets = async (flags) => {
    if(!flags.endpoint){
        console.log("Write an endpoint!");
        return;
    }

    const result = await bucket.listBucket(flags.endpoint);

    console.log(result.msg);
    console.log(result.data);
}

module.exports = {
    createBucket,
    findById,
    findByName,
    deleteBucket,
    listBuckets,
}