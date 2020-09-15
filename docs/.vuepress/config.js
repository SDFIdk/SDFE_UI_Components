module.exports = {
  title: 'UI Components',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/Kortforsyningen/SDFE_UI_Components' }
    ],
    sidebar: [
      {
        title: 'Base',
        path: '/base/',
        children: [
          '/base/',
          '/base/forms/'
        ]
      },
      '/icons/',
      {
        title: 'Components',
        path: '/components/',
        children: [
          '/components/cards/',
          '/components/tabs/',
          '/components/accordion/',
          '/components/forms/'
        ]
      }
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
