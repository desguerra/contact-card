const HtmlWebpackPlugin = require('html-webpack-plugin');

/* The output filename can be any name that describes the contents. 
In the webpack docs, the basic setup uses main.js. However, here we 
are changing the name to bundle.js because we refer to our content 
inside that file as our bundle throughout the lesson. So this is 
just a chore to make sure we can easily find our bundle file later on! */

const path = require('path');
  module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      })
    ]
  };