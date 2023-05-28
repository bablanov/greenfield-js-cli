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
  if (input.includes('get-bank')) {
    await cmd.bank.getBank(flags);
  }

  if(input.includes('get-bank-balance')){
    await cmd.bank.getBankBalance(flags);
  }

  if(input.includes('bank-transfer')){
    await cmd.bank.bankTransfer(flags);
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

  if(input.includes('get-buckets')){
    await cmd.bucket.listBuckets(flags);
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

  if(input.includes('get-object')){
    console.log(flags)
    await cmd.object.getObject(flags);
  }

  if(input.includes('delete-object')){
    await cmd.object.deleteObject(flags)
  }

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();
