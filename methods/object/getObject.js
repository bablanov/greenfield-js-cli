const fs = require('node:fs');
const os = require('node:os');
const client = require("../client");
const path = require("node:path");

async function getObject(objectName, bucketName, endpoint){
    const object = await client.object.getObject({
        objectName : objectName,
        bucketName : bucketName,
        endpoint : endpoint,
    });
    const buffer = Buffer.from(await object.body.arrayBuffer());
    const filePath = path.join(os.homedir(), objectName)
    fs.writeFile(filePath, buffer, (err) => {
        if(err) console.log("error")
        else console.log(`File successfully downloaded in path : ${filePath}`)
    });
}

module.exports = getObject;