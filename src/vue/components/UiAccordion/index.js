'use strict'

import UiAccordion from './UiAccordion.vue'
import UiAccordionItem from './UiAccordionItem.vue'
import UiTransitionCollapse from '../UiTransitionCollapse'

export default {
  install (Vue, options) {
    Vue.use(UiTransitionCollapse) // Dependency
    Vue.component(UiAccordion.name, UiAccordion)
    Vue.component(UiAccordionItem.name, UiAccordionItem)
  }
}
