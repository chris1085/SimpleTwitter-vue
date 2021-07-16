<template>
  <div class="adminSidebar">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="buttonList">
      <div class="navItem index">
        <div class="icon">
          <img v-if="inltTweets" src="../assets/atHome.svg" alt="" />
          <img v-else src="../assets/home.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/admin_main">
            <p :class="{ active: inltTweets }" id="routerTweets">推文清單</p>
          </router-link>
        </button>
      </div>
      <div class="navItem userProfile">
        <div class="icon">
          <img v-if="adminUsers" src="../assets/atProfile.svg" alt="" />
          <img v-else src="../assets/profile.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/admin_users">
            <p :class="{ active: adminUsers }" id="routerUsers">使用者列表</p>
          </router-link>
        </button>
      </div>

      <div class="navItem logout">
        <div class="icon">
          <img src="../assets/logout.svg" alt="" />
        </div>
        <button class="btn" @click.stop.prevent="logout">
          <p>登出</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSidebar',
  created() {
    const location = this.$route.path.split('/')[2]
    this.setCurrentLocation(location)
  },
  data() {
    return {
      inltTweets: false,
      adminUsers: false
    }
  },
  methods: {
    logout() {
      // delete token => log out
      this.$store.commit('revokeAuthentication')
      this.$router.push('/admin/signin')
    },
    setCurrentLocation(location) {
      console.log('location: ' + location)
      if (location === 'tweets') {
        this.inltTweets = true // at tweets
        this.adminUsers = false
      } else {
        this.inltTweets = false
        this.adminUsers = true // at users
      }
    }
  }
}
</script>

<style scoped>
.adminSidebar {
  margin-left: 103px;
  width: 235px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6ecf0;
}
.logo {
  margin-bottom: 24px;
}
.logo img {
  width: 50px;
  height: 50px;
}
.buttonList {
  flex: 1;
  position: relative;
}
.buttonList .navItem {
  height: 60px;
  display: flex;
  align-items: center;
}
.navItem .btn .active p {
  color: #ff6600;
}
/* .navItem .btn .active {
  border: 1px solid #000;
} */
.icon {
  height: 26px;
}
.btn {
  padding: 0;
}
.btn a {
  text-decoration: none;
}
.btn p {
  height: 26px;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #1c1c1c;
}
.newTweet p {
  font-weight: 500;
}
.icon img {
  margin: 17px 0;
  width: 16px;
  height: 20px;
  margin: 0 25px 0 10px;
}
.newTweet button {
  width: 210px;
  height: 45px;
  border-radius: 100px;
  background-color: #ff6600;
}
.newTweet button p {
  color: #fff;
}
.logout {
  position: absolute;
  bottom: 0;
}
</style>
