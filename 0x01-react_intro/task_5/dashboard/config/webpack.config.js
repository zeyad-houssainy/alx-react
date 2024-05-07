const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'file.js',
		path: path.resolve(__dirname, '../dist'),
	},
	devServer: {
		hot: true,
		port: 9000,
		compress: true,
		contentBase: path.join(__dirname, 'dist'),
	},
};
