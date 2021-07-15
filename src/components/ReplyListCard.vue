<template>
  <div>
    <ul class="tweets">
      <li class="tweet d-flex" v-for="(reply, index) in replies" :key="index">
        <router-link :to="`/user/${reply.UserId}`" class="tweet-img-container">
          <img
            :src="reply.avatar | emptyImage"
            alt=""
            class="tweet-img rounded"
          />
        </router-link>
        <div class="tweet-content-container d-flex flex-column w-100">
          <div class="tweet-header d-flex">
            <router-link :to="`/user/${reply.UserId}`" class="tweet-userName">{{
              reply.name
            }}</router-link
            ><span class="tweet-userInfo"
              >@{{ reply.commentAccount }}・{{
                reply.createdAt | fromNow
              }}</span
            >
          </div>
          <span class="tweet-replyFormat">
            回覆
            <router-link :to="`/user/${reply.UserId}`" class="reply-name"
              >@{{ reply.tweetAuthorAccount }}</router-link
            >
          </span>
          <p class="tweet-content">
            {{ reply.comment }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'

export default {
  name: 'MainTweetsCard',
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    isReplyPage: {
      type: Boolean,
      required: true
    },
    initReplies: {
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
      modalOpen: false,
      replies: this.initReplies
    }
  },
  watch: {
    initReplies(newValue) {
      this.replies = [...newValue]
    }
  }
}
</script>

<style lang="scss" scoped></style>
