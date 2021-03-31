//
// Copyright 2021 BRAINFRAME.com
//

const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      templateParameters: {
        title: 'BRANEFRAME'
      }
    }),
    new FaviconsWebpackPlugin({
      logo: './resources/img/favicon.png'
    })
  ]
};
