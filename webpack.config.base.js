const webpack = require("webpack");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: [
		path.join(__dirname, "./src/index.js")
	],
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "bundle.js"
	},
	optimization: {
		minimize: false
	},
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		historyApiFallback: true
	},
	mode: "development",
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.css$/,
			use: ["style-loader", "css-loader", "postcss-loader"]
		},
		{
			test: /\.(png|jp(e*)g|svg)$/,
			use: [{
				// loader: "file-loader"
				loader: "url-loader",
				options: {
					limit: 8000, // Convert images < 8kb to base64 strings
					name: "images/[hash]-[name].[ext]"
				}
			}]
		}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["./dist"]),
		new CopyWebpackPlugin([{
			from: "./src/index.html",
			to: "./index.html"
		}])
	]
};