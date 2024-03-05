const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new WebpackManifestPlugin({
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new WebpackObfuscator({
            rotateStringArray: true
        }, ['excluded_bundle_name.js']),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
    },
};
