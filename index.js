require("dotenv").config();
const methods = require("./methods");

(async () => {
    const data = await methods.provider.getProviderPrice("0x22804504786F44289D4156E7317142e25B92c00e");
    console.log(data)
})()