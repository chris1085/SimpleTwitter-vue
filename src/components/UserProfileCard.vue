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
            v-if="selected !== 'replies'"
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
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              @click.stop.prevent="handleRepliedContent(tweet)"
              ><i class="far fa-comment mr-3"></i>{{ tweet.repliedCount }}</a
            >
            <span
              class="tweet-icon"
              v-if="!tweet.isLike"
              @click.stop.prevent="addLikes(tweet)"
              ><i class="far fa-heart mr-3"></i>{{ tweet.likedCount }}</span
            >
            <span
              class="tweet-icon pink"
              v-else
              @click.stop.prevent="deleteLikes(tweet)"
              ><i class="fas fa-heart mr-3 pink"></i
              >{{ tweet.likedCount }}</span
            >
          </div>
        </div>
      </li>
    </ul>
    <RepliedModal
      :init-tweet="tweet"
      :current-user="currentUser"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
// import { Toast } from '../utils/helpers'
import RepliedModal from '../components/RepliedModal.vue'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'
export default {
  mixins: [emptyImageFilter, fromNowFilter],
  components: { RepliedModal },
  props: {
    userCardContent: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
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
    afterCreateComment() {
      this.$emit('after-create-comment')
    },
    handleRepliedContent(tweet) {
      this.tweet = tweet
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet-userName {
  color: #1c1c1c !important;
}
</style>
