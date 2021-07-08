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
  },
  {
    path: '/user/:id/follower',
    name: 'UserFollowers',
    component: () => import('../views/UserFollowers.vue')
  },
  {
    path: '/user/:id/following',
    name: 'UserFollowings',
    component: () => import('../views/UserFollowings.vue')
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue')
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
