require('dotenv');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		open: false,
		port: process.env.PORT,
		static: './dist',
		compress: true,
		client: {
			reconnect: 5,
			progress: true,
		},
	},
});
