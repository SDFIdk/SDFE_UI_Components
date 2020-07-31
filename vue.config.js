//const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  /*
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { 
            from: './src/styl/main.styl', 
            to: '/'
          }
        ],
      }),
    ]
  },*/
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/styl/*.styl')
      ]
    }
  }
}