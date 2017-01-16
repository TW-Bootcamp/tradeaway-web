var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  	entry: "./src/index.js",
  	output: {
		filename: "bundle.js",
		path: __dirname + "/build",
  	},
	plugins: [new HtmlWebpackPlugin({
		template:'./public/index.html',
        favicon:'./public/favicon.ico'
	})],
    devServer: {
        inline:true,
        port: 8000
    },
    devtool: 'source-map',
	module: {
	loaders: [
		{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=/img/[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		},
		{
			test: /\.css$/,
			loader: 'style!css'
		}
	]

    }
};