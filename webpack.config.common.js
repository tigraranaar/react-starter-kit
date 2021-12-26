const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
	entry: ["regenerator-runtime/runtime.js", "./src/index.tsx"],

	output: {
		filename: "[name].[contenthash].bundle.js",

		path: path.resolve(__dirname, "build"),

		clean: true,

		assetModuleFilename: "assets/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,

				exclude: /node_modules/,

				use: {
					loader: "babel-loader",

					options: {
						cacheDirectory: true,
					},
				},
			},
		],
	},

	plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json", "..."],
	},
};
