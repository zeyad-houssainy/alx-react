const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	devServer: {
		hot: true,
		port: 9000,
		compress: true,
		contentBase: path.join(__dirname, '../dist'),
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // Webpack@1.x
							disable: true, // Webpack@2.x and newer
						},
					},
				],
			},
		],
	},
};
