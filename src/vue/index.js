'use strict'

import UiTest from './components/UiTest'
import UiTabs from './components/UiTabs'
import UiAccordion from './components/UiAccordion'
import UiCard from './components/UiCard'
import UiFormCheckbox from './components/UiFormCheckbox'
import UiFormRange from './components/UiFormRange'
import UiFormSelect from './components/UiFormSelect'
import '../styl/main.styl'

export default {
  install (Vue, options) {
    Vue.use(UiTest)
    Vue.use(UiTabs)
    Vue.use(UiAccordion)
    Vue.use(UiCard)
    Vue.use(UiFormCheckbox)
    Vue.use(UiFormRange)
    Vue.use(UiFormSelect)
  }
}
