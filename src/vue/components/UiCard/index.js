'use strict';

import UiCard from './UiCard.vue';
import UiCardBody from './UiCardBody.vue';
import UiCardFooter from './UiCardFooter.vue';

export default {
  install(Vue, options) {
    Vue.component(UiCard.name, UiCard);
    Vue.component(UiCardBody.name, UiCardBody);
    Vue.component(UiCardFooter.name, UiCardFooter);
  }
};