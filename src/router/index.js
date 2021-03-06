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
    path: '/publicChatRoom',
    name: 'PublicChatRoom',
    component: () => import('../views/PublicChatRoom.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/Notification.vue')
  },
  {
    path: '/personalChat',
    name: 'PersonalChat',
    component: () => import('../views/PersonalChat.vue')
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
  // ??? localStorage ?????? token
  const token = localStorage.getItem('token')
  // ?????????????????????
  let isAuthenticated = false

  // ????????? token ???????????????
  if (token) {
    // ????????????????????????
    isAuthenticated = await store.dispatch('fetchCurrentUser')
    store.dispatch('getTopUser')
  }

  const pathsWithoutAuthentication = ['login', 'regist', 'admin']

  // ?????? token ?????????????????????????????????????????????????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // ?????? token ???????????????????????????????????????????????????????????????
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }

  // ?????? token ??????????????????????????????
  next()
})

export default router
