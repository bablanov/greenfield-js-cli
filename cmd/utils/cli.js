const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	address: {
		default: "",
		type: `string`,
		alias: `a`,
		desc: `Account address`
	},
	amount: {
		default: "",
		type: `string`,
		desc: `Amount`
	},
};

const commands = {
	help: { desc: `Print help info` },
	'get-account': { desc: `Returns account info` },
	'get-account-balance': { desc: `Returns account balance info` },
	'account-transfer': { desc: `Transfer between amount` },
	'get-providers': { desc: `Returns all providers` },
	'get-provider-price': { desc: `Returns provider price` },
	'get-specific-provider': { desc: `Returns more info about provider` },
	'crosschain-transfer-out': { desc: `Transfer amount` },
};

const helpText = meowHelp({
	name: ``,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
