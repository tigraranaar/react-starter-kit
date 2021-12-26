const TerserPlugin = require("terser-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require("webpack-merge");

const common = require("./webpack.config.common");

module.exports = merge(common, {
	mode: "production",

	devtool: false,

	target: "browserslist",

	module: {
		rules: [
			{
				test: /\.css$/,

				use: [
					MiniCssExtractPlugin.loader,

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

	plugins: [new MiniCssExtractPlugin()],

	optimization: {
		minimize: true,

		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],

		runtimeChunk: {
			name: "runtime",
		},
	},

	performance: {
		hints: false,

		maxEntrypointSize: 512000,

		maxAssetSize: 512000,
	},
});
