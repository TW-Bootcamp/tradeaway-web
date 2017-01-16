var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS2'],
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'test/**/*.test.js'
        ],
        preprocessors: {
            'test/**/*.test.js': [ 'webpack' ]
        },
        reporters: [ 'spec' ], //report results in this format
        webpack: webpackConfig
    });
};
