const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
  ...base.plugins,
  new MiniCssExtractPlugin({
    filename: "[name].[chunkhash].css",
    chunkFilename: "[id].[chunkhash].css",
  })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};