import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/custom.scss'
import App from './App.vue'
import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
