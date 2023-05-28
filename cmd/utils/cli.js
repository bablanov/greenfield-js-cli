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
	owner: {
		default: "",
		type: `string`,
		desc: `Account address`
	},
	toAddress: {
		default: "",
		type: `string`,
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
	'sp': { desc: `support the storage provider operation functions` },
	'bank': { desc: `support the bank functions` },
	'crosschain': { desc: `support the cross-chain functions` },
	'object': { desc: `support the object operation functions` },
	'bucket' : { desc : `support the bucket operation functions` },
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
