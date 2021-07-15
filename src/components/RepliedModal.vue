<template>
  <div>
    <div
      class="modal fade"
      id="repliedModal"
      tabindex="-1"
      aria-labelledby="repliedModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fas fa-times fa-lg"></i>
            </button>
          </div>
          <form @submit.stop.prevent="handleSubmit(initTweet.id)">
            <div class="modal-body">
              <div class="d-flex replyModal-container">
                <div class="tweet-img-container">
                  <img
                    :src="initTweet.avatar | emptyImage"
                    alt=""
                    class="tweet-img rounded"
                  />
                </div>
                <div class="tweet-content-container d-flex flex-column">
                  <div class="tweet-header d-flex">
                    <span class="tweet-userName">{{ initTweet.name }}</span
                    ><span class="tweet-userInfo"
                      >@{{ initTweet.account }}・{{
                        initTweet.createdAt | fromNow
                      }}</span
                    >
                  </div>
                  <p class="tweet-content">
                    {{ initTweet.description }}
                  </p>
                  <span class="tweet-replyFormat"
                    >回覆<span class="ml-1 d-inline-block" href=""
                      >@{{ initTweet.account }}</span
                    ></span
                  >
                </div>
              </div>
              <div class="d-flex replyModal-container">
                <div class="tweet-img-container">
                  <img
                    :src="currentUser.avatar | emptyImage"
                    alt=""
                    class="tweet-img rounded"
                  />
                </div>
                <div class="tweet-content-container d-flex flex-column">
                  <textarea
                    v-model="repliedContent"
                    class="tweet-content replyModal-content"
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="5"
                    placeholder="有什麼新鮮事嗎？"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary btn-tweet"
                data-bs-dismiss="modal"
                :disabled="isProcessing"
              >
                回覆
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'
import tweetsAPI from '../apis/tweets'

export default {
  props: {
    initTweet: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      repliedContent: '',
      isProcessing: false,
      repliedCurrentUser: this.currentUser,
      tweet: this.initTweet
    }
  },
  methods: {
    async handleSubmit(tweetId) {
      try {
        this.isProcessing = true

        if (
          this.repliedContent.trim().length === 0 ||
          this.repliedContent.trim().length > 140
        ) {
          throw new Error('無法送出空白或超過140字數的回文')
        }

        const content = { comment: this.repliedContent }
        const { data } = await tweetsAPI.repliedTweet({ content, tweetId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.repliedContent = ''
        this.isProcessing = false

        const curTime = new Date()

        const comment = {
          content: content.comment,
          curTime,
          id: this.initTweet.id
        }

        this.$emit('after-create-comment', comment)
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    }
  }
}
</script>
