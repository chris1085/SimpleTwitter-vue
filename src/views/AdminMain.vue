<template>
  <div id="AdminMain">
    <!-- AdminSidebar -->
    <AdminSidebar />
    <!-- AdminTweetsList -->
    <div class="AdminTweetsPanel">
      <div class="title">
        <h1>推文清單</h1>
      </div>
      <AdminTweetsList
      :inlt-tweets="inltTweets"
       @after-delete-tweet="afterDeleteTweet"
      />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminTweetsList from '../components/AdminTweetsList.vue'
import tweetsAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminMain',
  components: {
    AdminSidebar,
    AdminTweetsList
  },
  data() {
    return {
      tweet: {
        id: -1,
        UserId: '',
        description: '',
        createdAt: '',
        account: '',
        name: '',
        avatar: '',
        likedCount: '',
        repliedCount: '',
        isLike: false
      },
      inltTweets: [],
      isLoading: true
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getTweets()

        this.inltTweets = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    },
    async afterDeleteTweet(tweetId) {
      try {
        const { data } = await tweetsAPI.deleteTweet({ tweetId })
        console.log(data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.inltTweets = this.inltTweets.filter(tweet => tweet.id !== tweetId)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法將推文刪除，請稍後再試'
        })
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
#AdminMain {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: auto;
}
.AdminTweetsPanel {
  flex: 1;
  min-height: 100vh;
}
.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}
.title h1 {
  font-size: 19px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
}
</style>
