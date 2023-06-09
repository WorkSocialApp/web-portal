require('dotenv');
const { merge } = require('weboack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map', // for debugging in prod
});
