// runs the backend + frontend, building the frontend with webpack-dev-server for live development

// start the backend
import SneakAPeek from "sneakapeek";
import sneakAPeekConfig from "./sneakapeek.config.json";
SneakAPeek(sneakAPeekConfig);

// start the frontend
import minimist from "minimist";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

import configDev from "./webpack.config.dev.js";
import configProd from "./webpack.config.prod.js";

const port = 8080;

const args = minimist(process.argv.slice(2));
let config;
if (args.dev || args.development) {
	console.log("Starting in development mode");
	config = configDev;
} else {
	console.log("Starting in production mode");
	config = configProd;
}

const options = {
	publicPath: config.output.publicPath,
	hot: true,
	inline: true,
	stats: {
		colors: true
	}
};

const server = new WebpackDevServer(webpack(config), options);
server.listen(port, "localhost", function(err) {
	if (err) {
		console.log(err);
	}
	console.log("WebpackDevServer listening:", port);
});
