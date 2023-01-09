import Vue from 'vue'
import App from './view/MyHome.vue'
import router from '@/router'
import VueRouter from "vue-router"

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// import axios from 'axios'
// import qs from 'qs'
/* eslint-disable */

Vue.use(Element)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
