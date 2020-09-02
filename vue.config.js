const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '~': path.resolve(__dirname, 'src/')
    //   }
    // },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets/icons', to: 'assets/icons' },
        ],
      })
    ]
  },
  chainWebpack: config => {
    // config.resolve.alias.set('assets', path.resolve('src')); 

    // const svgRule = config.module.rule('svg');

    // svgRule.uses.clear();

    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');

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
	}
}
