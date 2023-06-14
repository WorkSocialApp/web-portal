require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

let port = process.env.PORT || 8080;
console.log(port);

module.exports = merge(common, {
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
});
