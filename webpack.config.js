module.exports = {
  context: __dirname + "/src",
  entry: "./App.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  module: {
  		loaders: [
        	{
	            test: /\.jsx?$/,
	            loader: 'babel-loader',
	            query:
	            {
	                presets:['es2015', 'react']
	            }
        	},
        	{ 
        		test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' 
        	},
        	{ 
        		test: /\.css$/, 
        		loader: 'style!css'
        	},

    	]

    },
};