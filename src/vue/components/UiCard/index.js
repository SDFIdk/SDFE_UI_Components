'use strict';

import UiCard from './UiCard.vue';

export default {
  install(Vue, options) {
    Vue.component(UiCard.name, UiCard);
  }
};