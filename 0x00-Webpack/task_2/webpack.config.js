const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	performance: {
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
};
