const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    resolve:{
        alias:{
            '@':paths.appSrc
        }
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg)$/,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack'
        })
    ]
}