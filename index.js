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

  if (input.includes('sp')) {
    if (input.includes('ls')) {
      // sp ls
      await cmd.provider.getProviders();
    }

    if (input.includes('head')) {
      // sp head --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
      await cmd.provider.getSpecificProvider(flags);
    }

    if (input.includes('get-price')) {
      // sp get-price --address 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
      await cmd.provider.getProviderPrice(flags);
    }
  }

  if (input.includes('bank')) {
    if (input.includes('balance')) {
      // bank balance --address 0xC2FFa0cE69B7c6a0C103225b8C1AE262ae44051e
      await cmd.bank.getBankBalance(flags);
    }

    if (input.includes('transfer')) {
      // bank transfer --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000
      await cmd.bank.bankTransfer(flags);
    }

    if (input.includes('ls')) {
      // bank ls --owner 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
      await cmd.bank.getBank(flags);
    }
  }

  if (input.includes('crosschain')) {
    if (input.includes('transfer-out')) {
      // crosschain transfer-out --toAddress 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11 --amount 2000000000
      await cmd.crosschain.transferOut(flags);
    }
  }

  if (input.includes('object')) {
    if (input.includes('get')) {
      // object get --objectName test.png --bucketName test-foofie-10 ---endpoint https://gnfd-testnet-sp-2.bnbchain.org
      await cmd.object.getObject(flags);
    }
  }

  if (input.includes('create-bucket')) {
    await cmd.bucket.createBucket(flags);
  }

  if (input.includes('get-bucket-by-id')) {
    await cmd.bucket.findById(flags);
  }

  if (input.includes('get-bucket-by-name')) {
    await cmd.bucket.findByName(flags);
  }

  if (input.includes('delete-bucket')) {
    await cmd.bucket.deleteBucket(flags);
  }

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();
