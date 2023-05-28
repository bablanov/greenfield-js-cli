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

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();