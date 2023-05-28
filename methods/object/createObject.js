const fs = require("node:fs");
const crypto = require("node:crypto");

const client = require("../client");
const selectSp = require("../spInfo");
function generateChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm,  'md5')
        .update(str, 'utf8')
        .digest(encoding,  'hex');
}
async function createObject(bucketName, objectName, type, ){
    const filePath = `${__dirname}\\${objectName}.${type}`;
    const spInfo = await selectSp();
    const fileBuffer = await fs.readFileSync(filePath);
    const stats = fs.statSync(filePath);
    const bytes = new Uint8Array(fileBuffer);
    const exceptCheckSums = generateChecksum(bytes);
    try{
        const obj = await client.object.createObject({
            bucketName: bucketName,
            objectName : objectName,
            creator : process.env.ADDRESS,
            fileType : type,
            expectSecondarySpAddresses : spInfo.secondarySpAddresses,
            spInfo : spInfo,
            contentLength : stats.size,
            exceptCheckSums : exceptCheckSums,
            file : fileBuffer
        })
        const simulate = await obj.simulate({
            denom : "BNB"
        });

        const broadcast = await obj.broadcast({
            denom : "BNB",
            payer : process.env.ADDRESS,
            privateKey : `0x${process.env.PRIVATE_KEY}`,
            gasPrice : simulate?.gasPrice || "5000000000",
            gasLimit : Number(simulate?.gasLimit),
            granter : ""
        })
        console.log(broadcast)
    } catch (e){
        console.log(e)
    }

}

module.exports = createObject;