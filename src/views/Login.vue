<template>
  <div class="container">
    <form @submit.prevent.stop="handleSubmit" class="login-form">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="title">
        <h1>登入 Alphitter</h1>
      </div>

      <div class="row">
        <label for="account">帳號</label>
        <input
          id="account"
          name="account"
          type="text"
          v-model="form.account"
          required
        />
      </div>

      <div class="row">
        <label for="password">密碼</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="form.password"
          required
        />
      </div>

      <div class="row mt-4">
        <button class="btn signin" type="submit" :disabled="isProcessing">
          {{ isProcessing ? '登入中' : '登入' }}
        </button>
      </div>
      <div class="row link-btns-container text-right">
        <div class="link-btns">
          <router-link class="routerLink" to="/regist"
            >註冊 Alphitter</router-link
          >
          <span> &#xb7; </span>
          <router-link class="routerLink" to="/admin">後台登入</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: '',
        password: ''
      },
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      const payload = this.form
      const formDataCheckResult = this.formDataCheck(payload)
      if (!formDataCheckResult) {
        return
      }
      try {
        this.isProcessing = true

        const { data } = await authorizationAPI.signIn(payload)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // set token
        console.log(data)
        localStorage.setItem('token', data.token)

        // 透過 setCurrentUser 把使用者資料存到 Vuex 的 state 中
        this.$store.commit('setCurrentUser', data.user)

        // 轉址
        this.$router.push('/main')
      } catch (error) {
        console.log(error)
        // console.error(data.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '帳號密碼輸入錯誤，請在試一次！'
        })
        this.form.account = ''
        this.form.password = ''
      }
    },
    formDataCheck({ account, password }) {
      let result = false

      if (account === 'root') {
        Toast.fire({
          icon: 'error',
          title: '無法使用管理者帳號於前臺登入！'
        })
        return false
      }
      if (!account) {
        Toast.fire({
          icon: 'info',
          title: '尚未填寫帳號！'
        })
        return false
      }
      if (!password) {
        Toast.fire({
          icon: 'info',
          title: '尚未填寫密碼！'
        })
        return false
      }
      result = true
      return result
    }
  }
}
</script>

<style scoped>
.logo {
  margin: 60px 0 30px 0;
}
.logo img {
  width: 50px;
  height: 50px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  width: 540px;
  margin: 10px;
}
.row label {
  color: #657786;
  font-weight: 700;
}
.title h1 {
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 23px;
}
input {
  background-color: #f5f8fa;
  width: 100%;
  border: none;
  border-bottom: 2px solid #657786;
  outline: none;
}
.btn {
  width: 100%;
  border-radius: 50px;
  height: 50px;
}
button.signin {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.link-btns-container {
  margin-right: 0px;
}
.link-btns {
  padding-right: 0px;
}
.routerLink {
  font-weight: 700;
  color: #0099ff;
  text-decoration: underline;
}
.link-btns-container span {
  color: #0099ff;
  font-weight: 700;
}
</style>
