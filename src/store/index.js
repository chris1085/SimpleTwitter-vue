import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      account: '',
      avatar: '',
      cover: '',
      email: '',
      id: undefined,
      introduction: '',
      name: '',
      role: 'user'
    },
    isAuthenticated: false,
    token: '',
    currentRoomId: undefined,
    topUsers: [
      {
        account: '',
        avatar: '',
        followerCount: 0,
        id: -1,
        isFollowed: false,
        name: ''
      }
    ]
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser // 透過API取得
      }
      // console.log(('state:', state))
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    },
    setTopUsers(state, topUsers) {
      state.topUsers = topUsers
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { account, id, name, email, avatar, role } = data

        commit('setCurrentUser', {
          account,
          id,
          name,
          email,
          avatar,
          role
        })

        // signin success
        return true
      } catch (error) {
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        // console.log(error.message)
        return false
      }
    },
    async getTopUser({ commit }) {
      try {
        const { data } = await usersAPI.getTopUsers()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        commit('setTopUsers', data.users)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得Top跟隨者'
        })
      }
    }
  },
  modules: {}
})
