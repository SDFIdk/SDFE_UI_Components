'use strict';

import UiTest from './components/UiTest';
import UiTabs from './components/UiTabs';
import UiCard from './components/UiCard';
import 'normalize.css/normalize.css';
import '../styl/main.styl';

export default {
  install(Vue, options) {
    Vue.use(UiTest);
    Vue.use(UiTabs);
    Vue.use(UiCard);
  }
};