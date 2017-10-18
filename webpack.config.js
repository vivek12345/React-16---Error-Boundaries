const path = require('path');
const devStyleLoader = 'style-loader!css-loader!postcss-loader!sass-loader';
module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './App.js',
	output: {
		filename: '[name].dev.js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loader: devStyleLoader
		}, {
			test: /\.css$/,
			loader: devStyleLoader
		}]
	}
}