<template>
  <div class="d-flex">
    <!-- <SideNavBar /> -->
    <SideNavBarDC :avatar="avatar" />
    <section class="main-container">
      <header><h3 class="font-bold">首頁</h3></header>
      <div class="main-tweet">
        <div class="content d-flex">
          <img class="content-img rounded" :src="avatar | emptyImage" alt="" />
          <textarea
            class="content-tweet"
            name="newTweet"
            id="newTweet"
            cols="30"
            placeholder="有什麼新鮮事嗎？"
          ></textarea>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary btn-tweet">
            推文
          </button>
        </div>
      </div>
      <MainTweetsCard :is-reply-page="isReplyPage" :init-tweets="tweets" />
    </section>

    <FollowingsCardDC />
  </div>
</template>

<script>
import MainTweetsCard from '../components/MainTweetsCard.vue'
// import FollowingsCard from '../components/FollowingsCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'

// import SideNavBar from '../components/SideNavBar.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import { emptyImageFilter } from '../utils/mixins'
import tweetsAPI from '../apis/tweets'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'MainTweetsPage',
  mixins: [emptyImageFilter],
  components: {
    MainTweetsCard,
    FollowingsCardDC,
    // FollowingsCard,
    // SideNavBar,
    SideNavBarDC
  },
  data() {
    return {
      isReplyPage: false,
      image: null,
      tweets: [],
      currentUser: {
        id: -1,
        name: '',
        account: '',
        email: '',
        role: '',
        introduction: '',
        avatar: '',
        cover: '',
        tweetsCount: 0,
        followingCount: 0,
        followerCount: 0
      },
      avatar: ''
    }
  },
  methods: {
    async getCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser()
        const { avatar } = response.data
        this.avatar = avatar
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得當前使用者，請稍後再試'
        })
      }
    },
    async fetchTweets() {
      try {
        const response = await tweetsAPI.getTweets()
        this.tweets = response.data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    }
  },
  created() {
    this.fetchTweets()
    this.getCurrentUser()

    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI1OTkyMjkyfQ.3hpb1tTBU3g5f6VtZTxLYOHLSfhU3-JO8lWKNEFA7Ts'
    )
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}
</style>
