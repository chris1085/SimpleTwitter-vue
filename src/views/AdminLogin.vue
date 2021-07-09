<template>
  <div class="container py-5">
    <form class="w-100">
      <div class="logo text-center">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="admin-text text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">後台登入</h1>
      </div>

      <div class="form-account form-label-group mb-2">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          autocomplete="useraccount"
          required
          autofocus
        />
      </div>

      <div class="form-password form-label-group mb-3">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        />
      </div>
      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>
      <div class="sign-in text-center mb-3">
        <p>
          <a href="/sigin">前台登入</a>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.logo {
  margin: 15px 0 30px 0;
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
.form-label-group {
  position: relative;
  bottom: 30px;
  width: 540px;
  margin: 10px;
}
.form-password {
  margin-top: 12px;
}
#password {
  margin-top: 1px;
}
.form-label-group label {
  color: #657786;
  font-weight: 700;
}
.admin-text h1 {
  font-size: 23px;
  font-weight: 900;
}
input {
  height: 24px;
  border: none;
  border-radius: 0;
  background-color: #f5f8fa;
  border-bottom: 2px solid #657786;
}
.btn {
  position: relative;
  bottom: 13px;
  margin-top: 0;
  width: 540px;
  height: 50px;
  color: #fff;
  background-color: #ff6600;
  border-radius: 50px;
  border: orangered;
  font-size: 18px;
  font-weight: 700;
}
form .sign-in {
  position: relative;
  left: 240px;
  bottom: 28px;
  font-weight: 900;
  text-decoration: underline;
  margin-top: 20px;
}
</style>
