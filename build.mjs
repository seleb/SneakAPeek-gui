// builds the frontend
import minimist from "minimist";
import webpack from "webpack";

import configDev from "./webpack.config.dev.js";
import configProd from "./webpack.config.prod.js";

const args = minimist(process.argv.slice(2));
let config;
if (args.dev || args.development) {
	console.log("Building in development mode");
	config = configDev;
} else {
	console.log("Building in production mode");
	config = configProd;
}

webpack(config, (err, stats) => {});
