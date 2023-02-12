# simple-twitter-vue

<p align="center">
  <img src="https://raw.githubusercontent.com/chris1085/SimpleTwitter-vue/main/projectView.gif"/>
</p>
<p align="center">
  <a href="https://standardjs.com/"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

 這是一個使用 Vue.js 建立的 Simple Twitter 前端專案。並搭配 [
twitter-api-2020](https://github.com/wintersprouter/twitter-api-2020#ChatRoom) 後端專案，部署於 Heroku，以 RESTFul API 滿足社群網站不同資料的互動需求，打造一個全方位的社群網站。

 ## Demo 
 ### Demo 網址
 [Simple-Twitter-Demo](https://chris1085.github.io/SimpleTwitter-vue/#/)

### Demo 帳號
使用者可以使用以下帳號分別登入系統前台、後台。

|role| account | password |
| -------- | -------- | -------- |
| admin  | root   | 12345678  |
| user   | RyanHuang   | 12345678   

## Packages-相關套件
#### Vue, HTTP相關
* vue - v2.6.11
* vuex - v3.4.0
* vue-router - 3.2.0
* axios - 0.21.1
#### 切版相關
* bootstrap - v5.0.2
* vue-fontawesome - v2.0.2
* sass - 1.26.5
#### 編譯相關
* eslint - v6.7.2
* sass-loader - 8.0.2
#### 小工具
* uuid - v3.4.0
* moment - v2.29.1
* sweetalert2 - v11.0.18
### 公開聊天室（public chat room）
* socket.io-client - v2.4.0
## Installation-專案安裝流程

### 指定資料夾並在終端機輸入
```
git clone https://github.com/chris1085/SimpleTwitter-vue.git
cd SimpleTwitter-vue
npm install  #(請參考 package.json)
```

### 開發者編譯模式
```
npm run serve
```

### 產生公開檔
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Contributor-開發人員與工作分配

### 前端
#### [Chris Chiang](https://github.com/chris1085)
* 開發貼文留言頁面
  * 使用者能瀏覽所有的推文 (tweet)
  * 點擊貼文方塊時，能查看貼文與回覆串
  * 使用者能回覆別人的推文，回覆文字不能為空白；若不符合規定，會跳回同一頁並顯示錯誤訊息
  * 點擊貼文中使用者頭像時，能瀏覽該使用者的個人資料及推文
  * 使用者能新增推文，推文字數限制在 140 以內，且不能為空白；若不符合規定，會跳回同一頁並顯示錯誤訊息
* 使用者互動
  * 使用者可以追蹤/取消追蹤其他使用者（不能追蹤自己）
  * 使用者能對別人的推文按 Like/Unlike
  * 使用者能編輯自己的名稱、介紹、大頭照和個人頁橫幅背景
* 數據摘要
  * 推文 (Tweets)：排序依 Tweets 成立日期，最新的在前
  * 推文與回覆：使用者回覆過的內容，排序依日期，最新的在前
  * 跟隨中 (Following)：該使用者的關注清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面
  * 跟隨者 (Follower)：該使用者的跟隨者清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面
  * 喜歡的內容 (Like)：該使用者 like 過的推文清單，排序依 like 紀錄成立的時間，愈新的在愈前面
  * 使用者能在首頁看見跟隨者 (followers) 數量排列前 10 的使用者推薦名單

#### [yusian-du](https://github.com/yusian-du)
* 註冊/登入/登出
  * 除了註冊和登入頁，使用者一定要登入才能使用網站
  * 使用者能創建帳號、登入、登出
  * 註冊時，使用者可以設定 account、name、email 和 password 
  * email 和 account 不能重覆，若有重覆會跳出錯誤
  * 使用者能編輯自己的 account、name, email 和 password
* 後台 - 用 Admin 登入
  * 管理者可從專門的後台登入頁面進入網站後台
  * 管理者可以瀏覽全站的 Tweet 清單；可以直接在清單上快覽 Tweet 的前 50 個字
  * 可以在清單上直接刪除任何人的推文
  * 管理者可以瀏覽站內所有的使用者清單
  * 使用者社群活躍數據，包括推播數量、關注人數、跟隨者人數、推文被 like 的數量
  * 清單按推文數排序
### 後端
#### [Chia-Hui Hsueh](https://github.com/wintersprouter)
  * 規劃資料庫 user、tweet、reply、like、followship models
  * 撰寫 API 文件
  * API 與功能開發
    * 使用者與管理員登入 API
    * 前台使用者註冊 API
    * 追蹤一位使用者 API
    * 取消追蹤一位使用者 API
    * 瀏覽使用者的檔案 API
    * 編輯自己的使用者檔案 API
    * 編輯使用者帳戶資料 API
    * 目前登入的使用者 API
    * 全站追蹤者數量前10名的使用者名單 API
    * 後台刪除一則貼文 API
    * 後台瀏覽所有使用者 API
    * 公開聊天室取得歷史訊息 API
    * 使用者登入身分驗證設定
    * sockiet.io 身分驗證設定
    * 公開聊天室使用者上線、離線通知
    * 公開聊天室線上使用者列表
  * 撰寫 README.md
  * 重構程式碼 
    
#### [Hsin Yeh](https://github.com/Hsinyehh)
  * 規劃資料庫 message model
  * 資料庫種子資料設定 user、tweet、reply、like、followship message seeders
  * 撰寫 API 文件
  * API 與功能開發
    * 新增推文 API
    * 瀏覽所有推文 API
    * 瀏覽一則推文詳情 API
    * 瀏覽一則推文詳情 API
    * 回覆一則推文 API
    * 瀏覽回覆 API
    * 喜歡一則推文 API
    * 取消喜歡一則推文 API
    * 瀏覽使用者跟隨者 API
    * 瀏覽使用者跟隨中的人 API
    * 瀏覽使用者發過的所有推文 API
    * 瀏覽使用者的所有回覆 API
    * 瀏覽使用者所有點讚的推文 API
    * 公開聊天室使用者訊息儲存
  * 部屬 Heroku
  * 撰寫 README.md
  * 重構程式碼     
    
