const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    // externals: {
    //     // 'Vue': 'window.vue',
    //     // 'iView': 'window.iview',
    //     // 'VueRouter': 'window.vue-router',
    //     // 'Vuex': 'window.vuex',
    // },
    devtool: 'source-map',
    // devtool: "eval",
    // devtool: "eval-source-map",
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            // template: './src/template/index.ejs',
            template: './src/template/index.html',
            // inject: false
        })
    ]
});