import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/reply_list',
    name: 'ReplyList',
    component: () => import('../views/ReplyList.vue')
  }
]

const router = new VueRouter({
  // linkExactActiveClass: 'active',
  routes
})

// router.beforeEach((to, from, next) => {
//   store.dispatch('fetchCurrentUser')
//   next()
// })

export default router
