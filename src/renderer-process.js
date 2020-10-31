import Vue from 'vue'
import App from '@/renderer-process/App.vue'
import store from '@/renderer-process/store'
require('./assets/styles/desktop.scss')

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
