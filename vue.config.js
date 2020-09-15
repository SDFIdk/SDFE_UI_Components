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

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({
        svgo: {
          plugins: [
            {
              prefixIds: true,
              removeViewBox: false
            }
          ]
        }
      })
  },

  lintOnSave: false
}
