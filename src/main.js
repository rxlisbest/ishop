import './common/rem';
import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import { Lazyload } from 'vant';

import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/index.css';

// Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
Vue.use(Lazyload);
