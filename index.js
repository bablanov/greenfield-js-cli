require("dotenv").config();

const cmd = require("./cmd");
const methods = require("./methods");

const init = require('./cmd/utils/init');
const cli = require('./cmd/utils/cli');
const log = require('./cmd/utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
  init({ clear });

  if (input.includes('get-account')) {
    await cmd.account.getAccount(flags);
  }

  if(input.includes('create-bucket')){
    await cmd.bucket.createBucket(flags);
  }

  if(input.includes('get-bucket-by-id')){
    await cmd.bucket.findById(flags);
  }

  if(input.includes('get-bucket-by-name')){
    await cmd.bucket.findByName(flags);
  }

  if(input.includes('delete-bucket')){
    await cmd.bucket.deleteBucket(flags);
  }

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();
