const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");
module.exports = merge(common, {
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: resolveApp("dist"),
    clean: true,
  },
  mode: "production",
  devtool: "eval-cheap-module-source-map",
});