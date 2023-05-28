require("dotenv").config();

const cmd = require("./cmd");

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

  if (input.includes('get-account-balance')) {
    await cmd.account.getAccountBalance(flags);
  }

  if (input.includes('account-transfer')) {
    await cmd.account.transfer(flags);
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

  if (input.includes('get-providers')) {
    await cmd.provider.getProviders();
  }

  if (input.includes('get-provider-price')) {
    await cmd.provider.getProviderPrice(flags);
  }

  if (input.includes('get-specific-provider')) {
    await cmd.provider.getSpecificProvider(flags);
  }

  if (input.includes('crosschain-transfer-out')) {
    await cmd.crosschain.transferOut(flags);
  }

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();
