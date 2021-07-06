import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTweetsPage from '../views/MainTweetsPage.vue'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MainTweetsPage',
    component: MainTweetsPage
  }
]

const router = new VueRouter({
  // linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
