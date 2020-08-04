'use strict';

import UiTest from './components/UiTest';
import '../styl/main.styl';

export default {
  install(Vue, options) {
    Vue.use(UiTest);
  }
};