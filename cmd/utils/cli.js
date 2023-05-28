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
	bucketName : {
		default : "",
		type : `string`,
		alias : `b`,
		desc : `Bucket name`
	},
	type : {
		default : "public",
		type : `string`,
		alias : 't',
		desc : "Visibility type"
	},
	id : {
		type : `string`,
		default : "",
		alias : "i",
		desc : "Identifier"
	},
	amount: {
		default: "",
		type: `string`,
		desc: `Amount`
	},
	objectName : {
		default : "",
		type : "string",
		desc : "Object name"
	},
	endpoint : {
		default : "",
		type : "string",
		desc : "Greenfield endpoint"
	}
};

const commands = {
	help: { desc: `Print help info` },
	'get-bank': { desc: `Returns bank info` },
	'get-bank-balance' : {desc : "Returns bank balance"},
	'bank-transfer' : {desc : "Transfers money to another bank account"},
	'create-bucket' : {desc : `Creating new bucket`},
	'get-bucket-by-id' : {desc : "Returns bucket info by ID"},
	'get-bucket-by-name' : {desc : "Returns bucket info by name"},
	'detele-bucket' : {desc : "Deleting bucket"},
	'get-providers': { desc: `Returns all providers` },
	'get-provider-price': { desc: `Returns provider price` },
	'get-specific-provider': { desc: `Returns more info about provider` },
	'get-object' : {desc : "Downloading object by name, bucket name, endpoint"}
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
