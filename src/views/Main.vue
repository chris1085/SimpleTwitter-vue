<template>
  <div class="d-flex">
    <!-- <SideNavBar /> -->
    <SideNavBarDC
      :avatar="currentUser.avatar"
      @after-create-tweet="updateTweetCard"
    />
    <section class="main-container w-100">
      <header><h3 class="font-bold">首頁</h3></header>
      <div class="main-tweet">
        <form @submit.stop.prevent="handleSubmit">
          <div class="content d-flex">
            <router-link :to="`/user/${currentUser.id}`">
              <img
                class="content-img rounded"
                :src="currentUser.avatar | emptyImage"
                alt=""
              />
            </router-link>

            <textarea
              v-model="newTweetContent"
              class="content-tweet"
              name="newTweet"
              id="newTweet"
              cols="30"
              placeholder="有什麼新鮮事嗎？"
            ></textarea>
          </div>
          <div class="btn-container">
            <button
              type="submit"
              class="btn btn-primary btn-tweet"
              :disabled="isProcessing"
            >
              推文
            </button>
          </div>
        </form>
      </div>
      <MainTweetsCard
        :is-reply-page="isReplyPage"
        :init-tweets="tweets"
        :current-user="currentUser"
        @after-create-comment="updateTweetCard"
      />
    </section>

    <FollowingsCardDC :init-top-users="topUsers" :current-user="currentUser" />
  </div>
</template>

<script>
import MainTweetsCard from '../components/MainTweetsCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
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
      newTweetContent: '',
      topUsers: [],
      isReplyPage: false,
      isProcessing: false,
      tweets: [],
      currentUser: {
        avatar: '',
        id: -1
      }
    }
  },
  methods: {
    async getCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser()
        const { avatar, id } = response.data
        this.currentUser.avatar = avatar
        this.currentUser.id = id
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
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true

        if (
          this.newTweetContent.trim().length === 0 ||
          this.newTweetContent.trim().length > 140
        ) {
          throw new Error('無法送出空白或超過140字數的文章')
        }

        const content = { description: this.newTweetContent }
        const { data } = await tweetsAPI.newTweet.create(content)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.newTweetContent = ''
        this.isProcessing = false
        this.fetchTweets()
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    },
    async getTopUser() {
      try {
        const response = await usersAPI.getTopUsers()
        this.topUsers = response.data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得Top跟隨者'
        })
      }
    },
    updateTweetCard() {
      this.fetchTweets()
    }
  },
  created() {
    this.fetchTweets()
    this.getCurrentUser()
    this.getTopUser()

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
}
</style>
