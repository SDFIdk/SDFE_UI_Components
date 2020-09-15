'use strict'

import UiTest from './UiTest.vue'

export default {
  install (Vue, options) {
    Vue.component(UiTest.name, UiTest)
  }
}
