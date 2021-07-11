import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { NavbarPlugin, DropdownPlugin, CollapsePlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin, DropdownPlugin, CollapsePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
