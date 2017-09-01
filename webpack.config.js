const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

// paths

const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_DIR}/js/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.ttf$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../',

            },
          },
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Let \'s learn React',
      filename: 'index.html',
      template: 'src/index.html',
    }),

    new CleanWebpackPlugin(['dist']),
    new ExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  // devServer settings https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    contentBase: DIST_DIR,
    port: 9000,
  },

};

module.exports = config;
