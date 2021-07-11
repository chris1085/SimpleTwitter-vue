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
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <router-link :to="`/user/${tweet.id}`" class="tweet-userName">{{
              tweet.name
            }}</router-link
            ><span class="tweet-userInfo"
              >@{{ tweet.account }}・{{ tweet.createdAt | fromNow }}</span
            >
          </div>
          <p class="tweet-content">
            {{ tweet.description }}
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>{{ tweet.repliedCount }}</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>{{ tweet.likedCount }}</a
            >
          </div>
        </div>
      </li>
    </ul>
    <RepliedModal />
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
    isReplyPage: {
      type: Boolean,
      required: true
    },
    initTweets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>

<style lang="scss" scoped></style>
