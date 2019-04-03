const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

module.exports = {
  entry: "./app.js",
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "template.html"
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: "react",
          global: "React",
          entry: `umd/react.development.js`
        }
      ]
    })
  ]
};
