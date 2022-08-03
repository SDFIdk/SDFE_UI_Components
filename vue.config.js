const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets/icons', to: 'assets/icons' }
        ]
      })
    ]
  },

  lintOnSave: false
}
