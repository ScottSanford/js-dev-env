import path from 'path';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false, // shows files that are bundling
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web', // 'web', 'node', 'electron'
	output: { // where to create the dev bundle
		path: path.resolve(__dirname, 'src'), // app runs from this folder
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [],
	module: {
		loaders: [ // filetypes
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style','css']}
		]
	}
}
