<template>
  <div>
    <ul class="tweets">
      <li
        class="tweet d-flex"
        v-for="(tweet, index) in initTweets"
        :key="index"
      >
        <router-link :to="`/user/${tweet.id}`" class="tweet-img-container">
          <img
            :src="tweet.avatar | emptyImage"
            alt=""
            class="tweet-img rounded"
          />
        </router-link>
        <div class="tweet-content-container d-flex flex-column w-100">
          <div class="tweet-header d-flex">
            <router-link :to="`/user/${tweet.id}`" class="tweet-userName">{{
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
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              @click.stop.prevent="handleRepliedContent(tweet)"
              ><i class="far fa-comment mr-3"></i>{{ tweet.repliedCount }}</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>{{ tweet.likedCount }}</a
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
import RepliedModal from '../components/RepliedModal.vue'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'

export default {
  name: 'MainTweetsCard',
  components: { RepliedModal },
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initTweets: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tweet: {}
    }
  },
  methods: {
    handleRepliedContent(tweet) {
      this.tweet = tweet
    },
    afterCreateComment() {
      this.$emit('after-create-comment')
    }
  }
}
</script>

<style lang="scss" scoped></style>
