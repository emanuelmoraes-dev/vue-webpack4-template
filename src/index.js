import 'babel-polyfill'
import 'es6-promise/auto'

// icons
import '@fortawesome/fontawesome-free/css/all.css'
import 'open-iconic/font/css/open-iconic.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'openwebicons/css/openwebicons.min.css'
import '../assets/bootstrap4-glyphicons/css/bootstrap-glyphicons.min.css'
import '../assets/Font-Awesome/all.css'

// css bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'assets/css/app.styl'

import Vue from 'vue'
import router from './router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import $ from 'jquery'
window.jQuery = $
window.$ = $

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(BootstrapVue)

axios.defaults.withCredentials = true

Vue.prototype.$eventHub = new Vue({})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
