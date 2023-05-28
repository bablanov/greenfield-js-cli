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

  if (input.includes('account')) {
    cmd.account.getAccount(process.env.ADDRESS);
  }

  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();