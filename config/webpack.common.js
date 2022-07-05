const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require('./paths')
const chalk = require('chalk');
const progressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = smp.wrap({
    entry:{
        index:'./src/index.js'
    },
<<<<<<< HEAD
    resolve:{
        alias:{
            '@':paths.appSrc
        }
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg)$/,
=======
    module:{
        rules:[
            {
                test: /\.(png|svg|ipg|jpeg|gif)$/i,
                include:[
                    paths.resolveApp('src'),
                ],
>>>>>>> 8c4c3a1 (feat: 一些插件使用)
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack'
        }),
        new progressBarWebpackPlugin({
            format:` :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed)`
        }),
        new BundleAnalyzerPlugin()
    ]
})