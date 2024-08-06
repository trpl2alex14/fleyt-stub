const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader', 'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/404.html',
    }),
    new CopyPlugin({
      patterns: [
         { from: 'src/img', to: 'img' },
         { from: 'src/css', to: 'css' },
         { from: 'src/favicon.svg', to: 'favicon.svg' },
         { from: 'src/favicon.ico', to: 'favicon.ico' },
         { from: 'src/robots.txt', to: 'robots.txt' },
         { from: 'src/site.webmanifest', to: 'site.webmanifest' },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
});
