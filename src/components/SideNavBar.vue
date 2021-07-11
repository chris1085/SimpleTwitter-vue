<template>
  <div class="sideNavbar">
    <div class="logo">
      <a href="#">
        <img src="../assets/images/logo.png" alt="" />
      </a>
    </div>
    <div class="buttonList home">
      <div class="navItem index">
        <div v-if="location === 'main'" class="icon">
          <!-- 橘色 -->
          <img src="../assets/images/atHome.svg" alt="" />
        </div>
        <div v-else class="icon">
          <!-- 黑色 -->
          <img src="../assets/images/home.svg" alt="" />
        </div>
        <button class="btn">
          <a href="/main">
            <p v-if="location === 'main'" class="located" id="routerMain">
              首頁
            </p>
            <p v-else id="routerMain">首頁</p>
          </a>
        </button>
      </div>
    </div>

    <div class="buttonList user">
      <div class="navItem userProfile">
        <div v-if="location === 'userProfile'" class="icon">
          <img src="../assets/images/atProfile.svg" alt="" />
        </div>
        <div v-else class="icon">
          <img src="../assets/images/profile.svg" alt="" />
        </div>
        <button class="btn">
          <a href="/user/self">
            <p
              v-if="location === 'userProfile'"
              class="located"
              id="routerProfile"
            >
              個人資料
            </p>
            <p v-else id="routerProfile">個人資料</p>
          </a>
        </button>
      </div>
    </div>

    <div class="buttonList setUp">
      <div class="navItem setting">
        <div v-if="location === 'userSetting'" class="icon">
          <img src="../assets/images/atSetting.svg" alt="" />
        </div>
        <div v-else class="icon">
          <img src="../assets/images/setting.svg" alt="" />
        </div>
        <button class="btn">
          <a href="/setting">
            <p
              v-if="location === 'userSetting'"
              class="located"
              id="routerSetting"
            >
              設定
            </p>
            <p v-else id="routerSetting">設定</p>
          </a>
        </button>
      </div>
    </div>

    <div class="navItem newTweet">
      <button class="btn" @click="showModal">
        <p>推文</p>
      </button>
    </div>

    <div class="navItem logout">
      <div class="icon">
        <img src="../assets/images/logout.svg" alt="" />
      </div>
      <button class="btn" @click.stop.prevent="logout">
        <p>登出</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.sideNavbar {
  /* position: absolute; */
  width: 235px;
  height: 100vh;
  /* height: 1196px; */
  /* left: 103px; */
  /* top: 4px; */
}

.logo {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 103px;
  top: 4px;
}

.logo img {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10px;
  top: 10px;
}

.home {
  position: absolute;
  width: 235px;
  height: 60px;
  left: 95px;
  top: 111px;
}

.user {
  position: absolute;
  width: 235px;
  height: 60px;
  left: 95px;
  top: 171px;
}

.setUp {
  position: absolute;
  width: 235px;
  height: 60px;
  left: 95px;
  top: 231px;
}

.navItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 80px;
  height: 26px;
  left: 8px;
  top: 16px;
}

.btn {
  position: static;
  display: contents;
  width: 72px;
  height: 26px;
  left: 44px;
  top: 0px;

  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #1c1c1c;
}

.icon {
  position: static;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 1px;
}

.btn p {
  margin-top: 0;
  margin-bottom: -7.5px;
  margin-left: 20px;
  width: max-content;

  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */
  color: #1c1c1c;
}

.newTweet {
  position: absolute;
  width: 235px;
  height: 60px;
  left: 95px;
  top: 301px;

  background: #ff6600;
  border-radius: 100px;
}

.newTweet p {
  position: absolute;
  width: 36px;
  height: 18px;
  left: 75px;
  top: 18px;

  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */
  color: #ffffff;
}

.logout {
  position: absolute;
  top: 1157px;
  left: 95px;
}
</style>
