<template>
  <div id="UserSetting">
    <!-- SideNavBar -->
    <SideNavBarDC
      :currentUser="currentUser"
      @after-create-tweet="updateTweetCard"
    />
    <!-- Header -->
    <div class="header">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>
      <UserSettingForm :isSignUp="isSignUp" />
    </div>
  </div>
</template>

<script>
import SideNavBarDC from '../components/SideNavBarDC.vue'
import UserSettingForm from '../components/UserSettingForm.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'UserSetting',
  components: {
    SideNavBarDC,
    UserSettingForm
  },
  data() {
    return {
      isSignUp: false,
      currentUser: {
        avatar: '',
        id: -1,
        name: '',
        account: ''
      }
    }
  },
  methods: {
    updateTweetCard() {},
    async getCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser()
        const { avatar, id, name, account } = response.data
        this.currentUser = {
          avatar,
          id,
          name,
          account
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得當前使用者，請稍後再試'
        })
      }
    }
  },
  created() {
    this.getCurrentUser()
  }
}
</script>

<style scoped>
#UserSetting {
  display: flex;
}

.header {
  flex: 1;
  margin-left: 378px;
}

.form {
  position: absolute;
  left: 378px;
  top: 85px;
}

.title {
  height: 75px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 24px;
  display: flex;
  align-items: center;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>
