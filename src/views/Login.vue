<template>
  <div class="container">
    <form>
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
        />
      </div>

      <div class="row">
        <label for="password">密碼</label>
        <input
          id="password"
          name="password"
          type="password"
        />
      </div>

      <div class="row mt-4">
        <button class="btn signin" type="submit" >
          登入
        </button>
      </div>
      <div class="row link-btns-container">
        <div class="link-btns">
          <router-link class="routerLink" to="/signup"
            >註冊 Alphitter</router-link
          >
          <span> &#xb7; </span>
          <router-link class="routerLink" to="/admin"
            >後台登入</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

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
  position: relative;
  height: 26px;
}
.link-btns {
  position: absolute;
  right: 0;
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
