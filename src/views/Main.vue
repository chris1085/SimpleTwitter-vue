<template>
  <div class="d-flex">
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <SideNavBarDC @after-create-tweet="updateTweetCard" />
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
      <MainTweetsCard :is-reply-page="isReplyPage" :init-tweets="tweets" />
    </section>

    <FollowingsCardDC :init-top-users="topUsers" />
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
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'MainTweetsPage',
  mixins: [emptyImageFilter],
  components: {
    MainTweetsCard,
    FollowingsCardDC,
    SideNavBarDC,
    Loading
  },
  data() {
    return {
      newTweetContent: '',
      topUsers: [],
      isReplyPage: false,
      isProcessing: false,
      tweets: [],
      newTweetInfo: {
        likedCount: 0,
        repliedCount: 0
      },
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    async fetchTweets() {
      try {
        this.isLoading = true
        const response = await tweetsAPI.getTweets()
        this.tweets = response.data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    },
    async handleSubmit(e) {
      try {
        this.isLoading = true
        this.isProcessing = true

        if (
          this.newTweetContent.trim().length === 0 ||
          this.newTweetContent.trim().length > 140
        ) {
          throw new Error('無法送出空白或超過140字數的文章')
        }

        this.getNewTweetInfo(this.newTweetContent)

        const content = { description: this.newTweetContent }
        const { data } = await tweetsAPI.newTweet.create(content)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.newTweetContent = ''
        this.isProcessing = false
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
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
    getNewTweetInfo(newTweetContent) {
      const curTime = new Date()
      this.newTweetInfo = {
        ...this.newTweetInfo,
        description: newTweetContent,
        createdAt: curTime,
        avatar: this.currentUser.avatar,
        name: this.currentUser.name,
        account: this.currentUser.account,
        UserId: this.currentUser.id
      }

      this.tweets.unshift(this.newTweetInfo)
    },
    updateTweetCard(newTweetContent) {
      this.getNewTweetInfo(newTweetContent)
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  created() {
    this.fetchTweets()
    this.getTopUser()
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
}
</style>
