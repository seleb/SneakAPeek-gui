require("sneakapeek");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.dev.js");
const port = 8080;

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
