'use strict';

var webpack = require('webpack');
var env = process.env.NODE_ENV;

var reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};

var intlExternal = {
    root: 'Intl',
    commonjs2: 'intl',
    commonjs: 'intl',
    amd: 'intl'
};

var config = {
    externals: {
        'react': reactExternal,
        'intl': intlExternal
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    output: {
        library: 'ReactIntlable',
        libraryTarget: 'umd'
    },
    plugins: [
        {
            apply: function apply(compiler) {
                compiler.parser.plugin('expression global', function expressionGlobalPlugin() {
                    this.state.module.addVariable('global', "(function() { return this; }()) || Function('return this')()")
                    return false
                })
            }
        },
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new webpack.ProvidePlugin({
            Intl: 'intl'
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    )
};

module.exports = config;