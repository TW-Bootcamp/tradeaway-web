var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  	entry: "./src/index.jsx",
  	output: {
		filename: "bundle.js",
		path: __dirname + "/build",
  	},
	plugins: [new HtmlWebpackPlugin({
		template:'./public/index.html',
        favicon:'./public/favicon.ico'
	}),new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })],
    devServer: {
        inline:true,
        port: 8888
    },
    devtool: 'source-map',
    eslint: {
        configFile: './.eslintrc'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
  		// preLoaders:[{
       //      test: /\.jsx$/, // include .js files
       //      exclude: /(node_modules|bower_components)/,
       //      loader: "eslint-loader"
       //  }],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
                exclude: /(node_modules|bower_components)/,
				loaders: [
					'file?hash=sha512&digest=hex&name=/img/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
            {
            	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
            },
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]

    }
};