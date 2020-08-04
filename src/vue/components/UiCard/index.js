'use strict';

import UiCard from './UiCard.vue';
import UiCardBody from './UiCardBody.vue';
import UiCardHeader from './UiCardHeader.vue';
import UiCardFooter from './UiCardFooter.vue';
import UiCardTabs from './UiCardTabs.vue';
import UiCardTab from './UiCardTab.vue';

export default {
  install(Vue, options) {
    Vue.component(UiCard.name, UiCard);
    Vue.component(UiCardBody.name, UiCardBody);
    Vue.component(UiCardHeader.name, UiCardHeader);
    Vue.component(UiCardFooter.name, UiCardFooter);
    Vue.component(UiCardTabs.name, UiCardTabs);
    Vue.component(UiCardTab.name, UiCardTab);
  }
};