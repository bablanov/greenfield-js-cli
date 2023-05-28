const {object} = require("../../methods");

const getObject = async (flags) => {
    if(!flags.objectName){
        console.log("Write an object name!");
        return;
    }

    if(!flags.endpoint){
        console.log("Write an object endpoint!");
        return;
    }

    const result = await object.getObject(flags.objectName,flags.bucketName,flags.endpoint)

}

const deleteObject = async (flags) => {
    if(!flags.bucketName){
        console.log("Write a bucket name!");
        return;
    }

    if(!flags.objectName){
        console.log("Write a object name!");
        return;
    }

    const result = await object.deleteObject(flags.bucketName, flags.objectName);

    console.log(result.msg);
    console.log(result.data);
}


module.exports = {
    getObject,
    deleteObject
}