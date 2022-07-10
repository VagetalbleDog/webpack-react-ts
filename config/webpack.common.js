const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require('./paths')
const chalk = require('chalk');
const progressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const BundleSizePlugin = require(paths.resolveApp('plugins')+'/bundleSizePlugin')
module.exports = smp.wrap({
    entry:{
        index:'./src/index.js'
    },
    module:{
        rules:[
            {
                test: /\.(png|svg|ipg|jpeg|gif)$/i,
                include:[
                    paths.resolveApp('src'),
                ],
                type:'asset/resource'
            },
            {
                test:/\.md$/,
                use:[
                    {
                        loader:paths.resolveApp('loaders')+'/md-loader',
                        options:{
                            headerIds:false
                        }
                    },
                    {
                        loader:paths.resolveApp('loaders') + '/html-color-loader',
                        options:{
                            text:'world'
                        }
                    },
                ]
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
        new BundleAnalyzerPlugin(),
        new BundleSizePlugin({limit:3})
    ]
})