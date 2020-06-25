// Dependencies
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// App
import App from './App.vue'

// Routes
import router from '@/router'

// Styles
import './assets/tailwind.css'

// Uses
Vue.config.productionTip = false
Vue.use(VueLazyload)

// Initialize
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
