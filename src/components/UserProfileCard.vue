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
            ><span class="tweet-userInfo" v-if="selected !== 'replies'"
              >@{{ tweet.account }}・{{ tweet.createdAt | fromNow }}</span
            >
            <span class="tweet-userInfo" v-else
              >@{{ tweet.tweetAuthorAccount }}・{{
                tweet.createdAt | fromNow
              }}</span
            >
          </div>
          <router-link
            :to="`/reply_list/${tweet.id}`"
            class="tweet-content"
            v-if="selected === 'tweeters'"
          >
            {{ tweet.description }}
          </router-link>
          <router-link
            :to="`/reply_list/${tweet.TweetId}`"
            class="tweet-content"
            v-else-if="selected === 'favorites'"
          >
            {{ tweet.description }}
          </router-link>
          <router-link
            :to="`/reply_list/${tweet.TweetId}`"
            class="tweet-content"
            v-else
          >
            {{ tweet.comment }}
          </router-link>
          <div
            class="tweet-icons-container d-flex"
            v-if="tweet.repliedCount >= 0"
          >
            <a
              href=""
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
import tweetsAPI from '../apis/tweets'
import RepliedModal from '../components/RepliedModal.vue'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter, fromNowFilter],
  components: { RepliedModal },
  props: {
    userCardContent: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  watch: {
    userCardContent(newValue) {
      this.tweets = [...newValue]
    }
  },
  data() {
    return {
      isFavorite: false,
      tweets: this.userCardContent,
      tweet: {}
    }
  },
  methods: {
    afterCreateComment(comment) {
      this.tweets.forEach(tweet => {
        if (tweet.id === comment.id) tweet.repliedCount += 1
      })
      this.$emit('after-create-comment')
    },
    handleRepliedContent(tweet) {
      this.tweet = tweet
    },
    async addLikes(tweet) {
      try {
        const id = this.selected === 'favorites' ? tweet.TweetId : tweet.id

        const { data } = await tweetsAPI.addLike(id)

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
        const id = this.selected === 'favorites' ? tweet.TweetId : tweet.id

        const { data } = await tweetsAPI.deleteLike(id)

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

<style lang="scss" scoped>
.tweet-userName {
  color: #1c1c1c !important;
}
</style>
