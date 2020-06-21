const TestRPC = require("ganache-cli");

module.exports = {
	networks: {
		development: {
			provider: TestRPC.provider({ port: 7545 }),
			network_id: "*", // Match any network id
		},
	},
	compilers: {
		solc: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	// contracts_directory: "./src/contracts/",
	// contracts_build_directory: "./src/abis/",
};
