<template>
  <div>
    <div class="sideNaveBar d-flex flex-column justify-content-between">
      <div class="sideNaveBar-menu-container">
        <h1 class="logo">
          <router-link class="logo-link" to="/main"
            >AlphaCamp Simple Twitter</router-link
          >
        </h1>
        <ul class="menuList">
          <li class="list-item">
            <router-link to="/main" class="list-link d-flex align-items-center">
              <div class="icon-container-home"></div>
              首頁</router-link
            >
          </li>
          <!-- <li class="list-item">
            <router-link
              to="/notification"
              class="list-link d-flex align-items-center"
            >
              <div class="icon-container">
                <font-awesome-icon :icon="['fas', 'bell']" />

                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="icon-message"
                />
              </div>
              通知</router-link
            >
          </li> -->
          <li class="list-item">
            <router-link
              to="/publicChatRoom"
              class="list-link d-flex align-items-center"
            >
              <div class="icon-container">
                <font-awesome-icon :icon="['far', 'envelope']" />

                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="icon-message"
                />
              </div>
              公開聊天室</router-link
            >
          </li>
          <!-- <li class="list-item">
            <router-link
              to="/personalChat"
              class="list-link d-flex align-items-center"
            >
              <div class="icon-container">
                <font-awesome-icon :icon="['far', 'envelope']" />

                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="icon-message"
                />
              </div>
              私人訊息</router-link
            >
          </li> -->
          <li class="list-item">
            <router-link
              :to="`/user/${currentUser.id}`"
              class="list-link d-flex align-items-center"
            >
              <div class="icon-container-profile"></div>
              個人資料</router-link
            >
          </li>
          <li class="list-item">
            <router-link
              to="/setting"
              class="list-link d-flex align-items-center"
            >
              <div class="icon-container-setting"></div>
              設定</router-link
            >
          </li>
        </ul>
        <button
          class="btn btn-primary btn-nav-tweet"
          data-bs-toggle="modal"
          data-bs-target="#newTweetModal"
        >
          推文
        </button>
      </div>

      <div class="logout-container">
        <a
          class="logout-link d-flex align-items-center"
          @click.stop.prevent="logout"
        >
          <div class="icon-container-logout"></div>
          登出</a
        >
      </div>
    </div>
    <NewTweetModal
      :currentUser="currentUser"
      @after-create-tweet="afterCreateTweet"
    />
  </div>
</template>

<script>
import NewTweetModal from '../components/NewTweetModal.vue'
import { mapState } from 'vuex'

export default {
  name: 'SideNavBarDC',
  components: { NewTweetModal },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    },
    afterCreateTweet(newTweetContent) {
      this.$emit('after-create-tweet', newTweetContent)
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>
