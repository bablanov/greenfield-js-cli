const client = require("../client");
const selectSp = require("../spInfo");

async function mirrorResource(resourceId, resource = 'bucket') {
  if (resource === 'group') {
    mirrorGroup(resourceId);
  }

  if (resource === 'bucket') {
    return await mirrorBucket(resourceId);
  }

  if (resource === 'object') {
    mirrorObject(resourceId);
  }
}

const mirrorGroup = (resourceId) => {

};

const mirrorBucket = async (resourceId) => {
  const spInfo = await selectSp();

  const mirrorBucketTx = await client.crosschain.mirrorBucket({
    operator : process.env.ADDRESS,
    id : resourceId
  });

  const simulateInfo = await mirrorBucketTx.simulate({
    denom : "BNB"
  });
  const obj = await client.object.createObject({f})
  const broadcast = await mirrorBucketTx.broadcast({
    gasLimit : Number(simulateInfo?.gasLimit),
    gasPrice : simulateInfo?.gasPrice || "5000000000",
    granter : "",
    payer : process.env.ADDRESS,
    privateKey : `0x${process.env.PRIVATE_KEY}`,
    denom : "BNB"
  });

  return {
    msg : "",
    data : broadcast
  };
};

const mirrorObject = (resourceId) => {

};

module.exports = mirrorResource;