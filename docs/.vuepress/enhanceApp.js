'use strict';

import UiComponents from '../../src/vue';
import './docs.styl';

import pageComponents from '@internal/page-components'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {

  // Hack fix: https://github.com/vuejs/vuepress/issues/1173#issuecomment-470534176
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }

  Vue.use(UiComponents);

  window.testFn = () => {
    console.log('test')
  }
}
