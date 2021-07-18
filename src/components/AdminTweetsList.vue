<template>
<div>
  <div class="container"
  v-for="tweet in inltTweets"
  :key="tweet.id"
  >
    <div class="avatar">
      <img :src=" tweet.avatar | emptyImage " alt="" />
    </div>
    <div class="tweet-info">
      <div class="title"><span>{{ tweet.name }}</span> @{{ tweet.account }}・{{ tweet.createdAt | fromNow }}</div>
      <p>
        {{ tweet.description | slice }}
      </p>
    </div>
    <div class="delete" @click.stop.prevent="handleDeleteButtonClick(tweet.id)">
      <i class="fas fa-times"></i>
    </div>
  </div>
</div>
</template>

<script>
import { fromNowFilter, emptyImageFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminTweetsList',
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    inltTweets: {
      type: Array,
      required: true
    }
  },
  watch: {
    inltTweets(newValue) {
      this.tweet = {
        ...this.tweet,
        ...newValue
      }
    }
  },
  methods: {
    handleDeleteButtonClick(tweetId) {
      this.$emit('after-delete-tweet', tweetId)
      Toast.fire({
        icon: 'success',
        title: '刪除成功！'
      })
    }
  },
  filters: {
    slice(description) {
      if (!description) return '-'
      return description.slice(0, 50)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: auto;
  min-height: 120px;
  padding: 15px 15px 25px;
  border-bottom: 1px solid #e6ecf0;
  margin: 70px 0px 5px 338px;
  width: 100%;
}
.tweet-info {
  width: 100%;
}
.tweet-info span {
  font-weight: 900;
  height: auto;
}
.avatar {
  min-width: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.avatar img {
  min-width: 50px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
}
.title {
  color: gray;
}
.delete {
  cursor: pointer;
}
</style>
