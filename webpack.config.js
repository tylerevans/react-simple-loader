var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: './dist',
        filename: 'build.js',
        libraryTarget: 'umd'
    },
		externals: {
        "react": "React"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				comments: false
			})
		]
}
