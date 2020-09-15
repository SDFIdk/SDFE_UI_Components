'use strict'

import UiTabs from './UiTabs.vue'
import UiTabsItem from './UiTabsItem.vue'

export default {
  install (Vue, options) {
    Vue.component(UiTabs.name, UiTabs)
    Vue.component(UiTabsItem.name, UiTabsItem)
  }
}
