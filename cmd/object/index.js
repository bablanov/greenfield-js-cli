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

module.exports = {
    getObject
}