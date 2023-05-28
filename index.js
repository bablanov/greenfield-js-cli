require("dotenv").config();


const methods = require("./methods");

(async () => {
  const data = await methods.object.createObject();
  // const data = await methods.provider.getProviders();
  // const data = await methods.bucket.createBucket("test-recds", "public");
  console.log(data)
})()