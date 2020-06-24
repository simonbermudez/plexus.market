// Dependencies
import Vue from 'vue'
import App from './App.vue'

// Routes
import router from '@/router'

// Styles
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
