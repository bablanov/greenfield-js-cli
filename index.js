require("dotenv").config();
const methods = require("./methods");
// const fs = require('node:fs');
// const path = require('node:path');
// const mime = require('node:mime');
//
// const { getCheckSums } = require('@bnb-chain/greenfiled-file-handle/files');

(async () => {
  const data = await methods.bucket.createBucket("test-dauren100", "public");
  console.log(data)
})()




















// (async () => {
//   const filePath = './package.json';
//   const fileBuf = fs.readFileSync(filePath);
//   const DEFAULT_SEGMENT_SIZE = 16 * 1024 * 1024;
//   const DEFAULT_DATA_BLOCKS = 4;
//   const DEFAULT_PARITY_BLOCKS = 2;
//   const bytes = new Uint8Array(fileBuf);
//
//   const hashResult = await getCheckSums(
//     Buffer.from(bytes).toString('hex'),
//     DEFAULT_SEGMENT_SIZE,
//     DEFAULT_DATA_BLOCKS,
//     DEFAULT_PARITY_BLOCKS,
//   );
//
//   console.log('hashResult', hashResult);
// })();

// a file
// const filePath = './package.json';
// const fileBuf = fs.readFileSync(filePath);
// const extame = path.extname(filePath);
// const fileType = mime.getType(extame);
// const spInfo = await selectSp();
// const createObjectTx = await client.object.createObject({
//   bucketName: 'risk1',
//   objectName: 'abcdef',
//   spInfo,
//   fileType: fileType || 'application/octet-stream',
//   creator: ACCOUNT.address,
//   expectSecondarySpAddresses: [],
// });
// const rxRes = await createObjectTx.broadcast({
//   denom: 'BNB',
//   gasLimit: 210000,
//   gasPrice: '50000000000',
//   payer: ACCOUNT.address,
//   granter: '',
// });
