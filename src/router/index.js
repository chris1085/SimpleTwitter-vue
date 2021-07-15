import Vue from 'vue'
import VueRouter from 'vue-router'
import UserSetting from '../views/UserSetting.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'
import store from './../store'

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
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin_users',
    name: 'adminUsers',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/reply_list/:id',
    name: 'ReplyList',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/user/:id/follow',
    name: 'UserFollowers',
    component: () => import('../views/UserFollow.vue')
  },
  {
    path: '/user/:id/following',
    name: 'UserFollowings',
    component: () => import('../views/UserFollow.vue')
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

router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const token = localStorage.getItem('token')
  // 預設是尚未驗證
  let isAuthenticated = false

  // 如果有 token 的話才驗證
  if (token) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['login', 'regist', 'admin']

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }

  // 如果 token 有效則轉址到餐廳首頁
  next()
})

export default router
