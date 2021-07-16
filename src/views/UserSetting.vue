<template>
  <div id="UserSetting" class="w-100">
    <!-- SideNavBar -->
    <SideNavBarDC @after-create-tweet="updateTweetCard" />
    <!-- Header -->
    <div class="header userSetting-container w-100">
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
import { mapState } from 'vuex'

export default {
  name: 'UserSetting',
  components: {
    SideNavBarDC,
    UserSettingForm
  },
  data() {
    return {
      isSignUp: false
    }
  },
  methods: {
    updateTweetCard() {}
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
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
