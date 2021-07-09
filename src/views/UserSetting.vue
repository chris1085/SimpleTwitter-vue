<template>
  <div id="UserSetting">
    <!-- SideNavBar -->
    <SideNavBar />
    <!-- Header -->
    <div class="header">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>
      <UserSettingForm />
    </div>
  </div>
</template>

<script>
import SideNavBar from '../components/SideNavBar.vue'
import UserSettingForm from '../components/UserSettingForm.vue'

export default {
  name: 'UserSetting',
  components: {
    SideNavBar,
    UserSettingForm
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
