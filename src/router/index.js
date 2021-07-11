import Vue from 'vue'
import VueRouter from 'vue-router'
import UserSetting from '../views/UserSetting.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Main from '../views/Main.vue'
import AdminMain from '../views/AdminMain.vue'
import AdminUsers from '../views/AdminUsers.vue'
import NotFound from '../views/NotFound.vue'
// import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/setting',
    name: 'setting',
    component: UserSetting
  },
  {
    path: '/signin',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/admin_main',
    name: 'adminMain',
    component: AdminMain
  },
  {
    path: '/admin_users',
    name: 'adminUsers',
    component: AdminUsers
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
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'btn-sideNavActive',
  routes
})

// router.beforeEach((to, from, next) => {
//   store.dispatch('fetchCurrentUser')
//   next()
// })

export default router
