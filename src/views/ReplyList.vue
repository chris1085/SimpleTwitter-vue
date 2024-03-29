<template>
  <div class="d-flex">
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    />

    <SideNavBarDC @after-create-tweet="updateTweetCard" />

    <div class="reply-container w-100">
      <header class="d-flex align-items-center">
        <router-link to="/main" class="leftArrow"
          ><i class="fas fa-arrow-left"></i
        ></router-link>
        <h3 class="font-bold">推文</h3>
      </header>
      <section class="main-tweet">
        <div class="tweet-header d-flex">
          <router-link :to="`/user/${tweet.UserId}`">
            <img
              class="content-img rounded"
              :src="tweet.avatar | emptyImage"
              alt=""
            />
          </router-link>
          <div class="content-user d-flex flex-column justify-content-center">
            <span class="tweet-userName">{{ tweet.name }}</span>
            <span class="tweet-userInfo">@{{ tweet.account }}</span>
          </div>
        </div>
        <div class="reply-content-container">
          <p>
            {{ tweet.description }}
          </p>
          <div class="reply-contentTime-container">
            <span class="reply-contentTime">{{
              tweet.createdAt | customizeDate
            }}</span>
          </div>
          <div class="reply-userResponse d-flex">
            <div class="comments">
              <span>{{ tweet.repliedCount }}</span> 回覆
            </div>
            <div class="likes">
              <span>{{ tweet.likedCount }}</span> 喜歡次數
            </div>
          </div>
          <div class="reply-userIcons-container">
            <a
              href=""
              class="reply-userIcon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><font-awesome-icon :icon="['far', 'comment']" class="mr-3"
            /></a>
            <span
              class="reply-userIcon"
              v-if="!tweet.isLike"
              @click.stop.prevent="addLikes(tweet)"
              ><font-awesome-icon :icon="['far', 'heart']" class="mr-3"
            /></span>
            <span
              class="reply-userIcon pink"
              v-else
              @click.stop.prevent="deleteLikes(tweet)"
              ><font-awesome-icon :icon="['fas', 'heart']" class="mr-3"
            /></span>
          </div>
        </div>
      </section>
      <ReplyListCard
        :is-reply-page="isReplyPage"
        :init-replies="replies"
        :current-user="currentUser"
      />
      <RepliedModal
        :init-tweet="tweet"
        :current-user="currentUser"
        @after-create-comment="updateTweet"
      />
    </div>

    <FollowingsCardDC :init-top-users="topUsers" :current-user="currentUser" />
  </div>
</template>

<script>
import ReplyListCard from '../components/ReplyListCard.vue'
import RepliedModal from '../components/RepliedModal.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import tweetsAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'ReplyList',
  mixins: [emptyImageFilter, dateFilter],
  components: {
    ReplyListCard,
    RepliedModal,
    FollowingsCardDC,
    SideNavBarDC,
    Loading
  },
  data() {
    return {
      isReplyPage: true,
      tweet: {},
      replies: [],
      isLoading: false,
      fullPage: true
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getTweet(to.params.id)
    this.getRepies(to.params.id)

    next()
  },
  methods: {
    async getRepies(id) {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.getRepies(id)
        // console.log(data)
        this.replies = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    },
    async getTweet(id) {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.getReplyTweet(id)
        this.tweet = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    },
    async addLikes(tweet) {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.addLike(tweet.id)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        tweet.isLike = !tweet.isLike
        tweet.likedCount += 1
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法喜愛這則推文，請稍後再試'
        })
      }
    },
    async deleteLikes(tweet) {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.deleteLike(tweet.id)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        tweet.isLike = !tweet.isLike
        tweet.likedCount -= 1
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取消喜愛這則推文，請稍後再試'
        })
      }
    },
    updateTweet(repliedContent) {
      console.log(repliedContent)
      const reply = {
        avatar: this.currentUser.avatar,
        comment: repliedContent.content,
        commentAccount: this.currentUser.account,
        createdAt: repliedContent.curTime,
        name: this.currentUser.name,
        tweetAuthorAccount: this.tweet.account
      }

      this.tweet.repliedCount += 1
      this.replies.unshift(reply)
    },
    updateTweetCard() {}
  },
  created() {
    const { id } = this.$route.params
    this.getRepies(id)
    this.getTweet(id)
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated', 'topUsers'])
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
}
</style>
