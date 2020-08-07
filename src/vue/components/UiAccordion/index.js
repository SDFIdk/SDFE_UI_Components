'use strict';

import UiAccordion from './UiAccordion.vue';
import UiAccordionItem from './UiAccordionItem.vue';

export default {
  install(Vue, options) {
    Vue.component(UiAccordion.name, UiAccordion);
    Vue.component(UiAccordionItem.name, UiAccordionItem);
  }
};