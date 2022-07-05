const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");
const path = require('path')
module.exports = merge(common, {
  devServer:{
      static:{
          directory:path.join(__dirname,'dist')
      },
      port:8888,
      hot:true,
      proxy:{
          '/api':'http://www.zhuwenfu.top'
      }
  },
  output: {
    filename: "[name].bundle.js",
    path: resolveApp("dist"),
    clean: false,
  },
  mode: "development",
  devtool: "eval-cheap-module-source-map",
});
