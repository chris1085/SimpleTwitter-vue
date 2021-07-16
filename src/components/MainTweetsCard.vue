<template>
  <div>
    <ul class="tweets">
      <li class="tweet d-flex" v-for="(tweet, index) in tweets" :key="index">
        <router-link :to="`/user/${tweet.UserId}`" class="tweet-img-container">
          <img
            :src="tweet.avatar | emptyImage"
            alt=""
            class="tweet-img rounded"
          />
        </router-link>
        <div class="tweet-content-container d-flex flex-column w-100">
          <div class="tweet-header d-flex">
            <router-link :to="`/user/${tweet.UserId}`" class="tweet-userName">{{
              tweet.name
            }}</router-link
            ><span class="tweet-userInfo"
              >@{{ tweet.account }}・{{ tweet.createdAt | fromNow }}</span
            >
          </div>
          <router-link :to="`/reply_list/${tweet.id}`" class="tweet-content">
            {{ tweet.description }}
          </router-link>
          <div class="tweet-icons-container d-flex">
            <a
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              @click.stop.prevent="handleRepliedContent(tweet)"
              ><font-awesome-icon :icon="['far', 'comment']" class="mr-3" />{{
                tweet.repliedCount
              }}</a
            >
            <span
              class="tweet-icon"
              v-if="!tweet.isLike"
              @click.stop.prevent="addLikes(tweet)"
              ><font-awesome-icon :icon="['far', 'heart']" class="mr-3" />{{
                tweet.likedCount
              }}</span
            >
            <span
              class="tweet-icon pink"
              v-else
              @click.stop.prevent="deleteLikes(tweet)"
              ><font-awesome-icon :icon="['fas', 'heart']" class="mr-3" />{{
                tweet.likedCount
              }}</span
            >
          </div>
        </div>
      </li>
    </ul>
    <RepliedModal
      :init-tweet="tweet"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RepliedModal from '../components/RepliedModal.vue'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'
import tweetsAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'

export default {
  name: 'MainTweetsCard',
  components: { RepliedModal },
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initTweets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tweets: this.initTweets,
      tweet: {}
    }
  },
  watch: {
    initTweets(newValue) {
      this.tweets = [...newValue]
    }
  },
  methods: {
    handleRepliedContent(tweet) {
      this.tweet = tweet
    },
    afterCreateComment(comment) {
      this.tweets.forEach(tweet => {
        if (tweet.id === comment.id) tweet.repliedCount += 1
      })
      this.$emit('after-create-comment')
    },
    async addLikes(tweet) {
      try {
        const { data } = await tweetsAPI.addLike(tweet.id)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        tweet.isLike = !tweet.isLike
        tweet.likedCount += 1
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法喜愛這則推文，請稍後再試'
        })
      }
    },
    async deleteLikes(tweet) {
      try {
        const { data } = await tweetsAPI.deleteLike(tweet.id)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        tweet.isLike = !tweet.isLike
        tweet.likedCount -= 1
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消喜愛這則推文，請稍後再試'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
