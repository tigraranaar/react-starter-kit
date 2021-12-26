const { merge } = require("webpack-merge");

const common = require("./webpack.config.common");

module.exports = merge(common, {
	mode: "development",

	target: "web",

	devtool: "inline-source-map",

	devServer: {
		historyApiFallback: true,

		open: true,

		compress: true,

		hot: true,

		port: 8080,
	},

	module: {
		rules: [
			{
				test: /\.css$/,

				use: [
					"style-loader",

					{
						loader: "css-loader",

						options: {
							importLoaders: 1,
						},
					},

					"postcss-loader",
				],
			},
		],
	},
});
