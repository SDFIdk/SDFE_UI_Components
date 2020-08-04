module.exports = {
  title: 'UI Components',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Kortforsyningen/SDFE_UI_Components' }
    ],
    sidebar: [
      '/base/',
      '/icons/',
      '/components/'
    ]
  },
  plugins: [
    [
      // Register components globally for use in markdown
      'register-components',
      {
        componentsDir: '../../src/vue'
      }
    ]
  ]
}