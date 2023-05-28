const fs = require('node:fs');
const path = require('node:path');
const selectSp = require("../spInfo");
const client = require("../client");
const crypto = require("node:crypto");

const createObject = async () => {
  const filePath = `${__dirname}/text.txt`;
  const bucketName = 'uid';
  const objectName = 'treewsada';
  const spInfo = await selectSp();


  const fileBuf = fs.readFileSync(filePath);
  const stats = fs.statSync(filePath)

  const contentLength = stats.size;
  const bytes = new Uint8Array(fileBuf);
  const expectCheckSums = generateChecksum(bytes);

  // console.log('checksum', expectCheckSums);
  // return 1;

  const createObjectTx = await client.object.createObject({
    bucketName: bucketName,
    objectName: objectName,
    spInfo,
    contentLength,
    expectCheckSums,
    fileType: 'txt',
    creator: process.env.ADDRESS,
    expectSecondarySpAddresses: [],
  });

  const res = await createObjectTx.broadcast({
    denom: 'BNB',
    gasLimit: 210000,
    gasPrice: '50000000000',
    payer: process.env.ADDRESS,
    granter: '',
  });

  const uploadRes = await client.object.uploadObject({
    bucketName: bucketName,
    objectName: objectName,
    body: fileBuf,
    txnHash: res.transactionHash,
    endpoint: spInfo.endpoint,
  });

  console.log('uploadRes', uploadRes);

  if (uploadRes.code === 0) {
    console.log('success');
  } else {
    console.log('error');
  }
};

function generateChecksum(str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex');
}

module.exports = {
  createObject,
}