// Dependencies
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import { Plugin } from 'vue-fragment'
import VueAnalytics from 'vue-analytics'
import { VueSpinners } from '@saeris/vue-spinners'

// App
import App from './App.vue'

// Routes
import router from '@/router'

// Styles
import './assets/tailwind.css'

// Uses
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(Plugin)
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_ANALYTICS,
  router
})
Vue.use(VueSpinners)

// Initialize
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
