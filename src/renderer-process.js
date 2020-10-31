import Vue from 'vue'
import App from '@/renderer-process/App.vue'
import store from '@/renderer-process/store'
import vuetify from '@/renderer-process/plugins/vuetify'
import '@/renderer-process/plugins/helpers'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/styles/desktop.scss'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
