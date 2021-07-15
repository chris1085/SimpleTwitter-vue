<template>
  <div class="container">
    <div class="title">
      <h1>跟隨誰</h1>
    </div>
    <hr />

    <div class="users">
      <ul class="usersList">
        <li class="user">
          <div class="userContent">
            <div class="avatar">
              <a href="/user/other/id">
                <img src="" alt="" />
              </a>
            </div>
            <div class="info">
              <div class="name">
                <a href="user/other/id">
                  <h2>pizza</h2>
                </a>
              </div>
              <div class="account">
                <a href="user/other/id">
                  <h2>@pizza</h2>
                </a>
              </div>
            </div>
            <div class="btn_follow">
              <button class="btn isFollowing">
                正在跟隨
              </button>
              <button class="btn">
                跟隨
              </button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>

    <div class="footer">
      <button class="btn">
        顯示更多
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 350px;
  margin: 15px 82px auto 30px;
  background-color: #f5f8fa;
  border-radius: 14px;
  padding: 0;
  display: block;
}

.title {
  padding: 10px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

hr {
  margin: 0;
}

.usersList {
  margin: 0;
  list-style: none;
}

.userContent {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
}

.userContent .avatar {
  height: 50px;
  width: 50px;
  background-color: #c4c4c4;
  border-radius: 50%;
}

.userContent .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.userContent .info {
  flex: 1;
  margin: 0 10px;
}

.userContent .info h2 {
  font-size: 15px;
  font-weight: 700;
}

.userContent .info .account h2 {
  color: #657786;
}

button {
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
}

.btn_follow button {
  font-size: 15px;
  font-weight: 700;
}

.btn_follow .isFollowing {
  width: 92px;
  background-color: #ff6600;
  color: #fff;
}

.footer {
  padding: 12px 0 12px 15px;
}

.footer .btn {
  padding: 0;
  border: none;
  font-weight: 400;
}</style
>>
