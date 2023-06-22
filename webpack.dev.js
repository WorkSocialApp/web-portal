require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { EnvironmentPlugin } = require('webpack');

let port = process.env.PORT || 8080;

const devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		open: false,
		port: port,
		static: './dist',
		compress: true,
		client: {
			reconnect: 5,
			progress: true,
		},
	},
	plugins: [
		new EnvironmentPlugin({
			API_URL: 'http://localhost:8080',
		}),
	],
};

module.exports = merge(common, devConfig);
