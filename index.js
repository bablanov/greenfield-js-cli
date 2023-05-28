require("dotenv").config();

let methods= require("./methods");

(async () => {
  const bucketId = 442;

  const b = await methods.crosschain.mirrorResource('442', 'bucket');
  console.log('b', b);

  // const b = await methods.bucket.getBucketByName('test-dauren');
  // console.log('b', b);



  // const balance = await methods.account.getAccountBalance(process.env.ADDRESS);
  // console.log('balance', balance);
  //
  //
  // const data= await methods.crosschain.transferOut('0x3FCd7164F0afAa358e7BcF02950714D3363B28f0', '1000000000000000');
  //
  // const nbalance = await methods.account.getAccountBalance(process.env.ADDRESS);
  // console.log('nbalance', nbalance);
})();

