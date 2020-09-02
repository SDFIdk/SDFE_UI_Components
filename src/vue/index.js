'use strict'

import UiTest from './components/UiTest'
import UiTabs from './components/UiTabs'
import UiAccordion from './components/UiAccordion'
import UiCard from './components/UiCard'
import 'sanitize.css'
import '../styl/main.styl'

export default {
  install (Vue, options) {
    Vue.use(UiTest)
    Vue.use(UiTabs)
    Vue.use(UiAccordion)
    Vue.use(UiCard)
  }
}
