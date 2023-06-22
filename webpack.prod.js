require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { EnvironmentPlugin } = require('webpack');

const prodConfig = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new EnvironmentPlugin({
			API_URL: 'http://worksocial-api.com', // can enter prod API here
		}),
	],
};

module.exports = merge(common, prodConfig);
