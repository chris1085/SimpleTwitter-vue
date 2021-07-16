<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="title">
      <h1>建立你的帳號</h1>
    </div>
    <!-- UserSettingForm -->
    <UserSettingForm :isSignUp="isSignUp" />
  </div>
</template>

<script>
import UserSettingForm from '../components/UserSettingForm.vue'

export default {
  name: 'Regist',
  components: { UserSettingForm },
  data() {
    return {
      isSignUp: true
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title h1 {
  font-weight: 900;
  font-size: 23px;
}

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
  margin: 20px 0 0 15px;
  width: 642px;
  align-items: center;
}
.row {
  width: 642px;
  margin: 10px 0;
}
.row label {
  padding-left: 11px;
  color: #657786;
  font-weight: 700;
  display: block;
  width: 100%;
}
.row input {
  padding-left: 11px;
  font-weight: 500;
  font-size: 19px;
  background-color: #f5f8fa;
  width: 100%;
  border: none;
  border-bottom: 2px solid #657786;
}
.note {
  font-size: 15px;
  color: #ff6600;
}
.btn {
  width: 100%;
  border-radius: 50px;
  height: 50px;
}
button.submit,
button.update {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
button.cancel {
  color: #0099ff;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
}
.row:last-child {
  position: relative;
  height: 50px;
}
button.update {
  position: absolute;
  right: 0;
  width: 122px;
  font-size: 18px;
}
</style>
