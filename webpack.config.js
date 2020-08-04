const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: './src/styl/*.styl', 
          to: './dest' 
        }
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
  
};