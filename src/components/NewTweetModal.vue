<template>
  <div>
    <div
      class="modal fade"
      id="newTweetModal"
      tabindex="-1"
      aria-labelledby="newTweetModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content newTweet-modal-content">
          <form @submit.stop.prevent="handleSubmit">
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
            <div class="modal-body">
              <div class="content d-flex">
                <img class="content-img" :src="avatar | emptyImage" alt="" />
                <textarea
                  v-model="newTweetContent"
                  class="content-tweet"
                  name="description"
                  id="sideNewTweet"
                  cols="30"
                  rows="5"
                  placeholder="有什麼新鮮事嗎？"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary btn-tweet"
                data-bs-dismiss="modal"
                :disabled="isProcessing"
              >
                推文
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import tweetsAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    avatar: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      image: null,
      isProcessing: false,
      newTweetContent: ''
    }
  },
  methods: {
    async handleSubmit(e) {
      try {
        this.isProcessing = true

        if (
          this.newTweetContent.trim().length === 0 ||
          this.newTweetContent.trim().length > 140
        ) {
          throw new Error('無法送出空白或超過140字數的文章')
        }

        const content = { description: this.newTweetContent }
        const { data } = await tweetsAPI.newTweet.create(content)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.newTweetContent = ''
        this.isProcessing = false

        this.$emit('after-create-tweet')
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
