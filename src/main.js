import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueSocketIO from 'vue-socket.io'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     // 服务器端地址
//     connection: 'http://localhost:4040',
//     vuex: {}
//   })
// )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
