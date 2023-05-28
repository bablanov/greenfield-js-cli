require("dotenv").config();


const methods = require("./methods");

(async () => {
    const object = await methods.object.createObject("test-foofie4", "text", "txt");
})()