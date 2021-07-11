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
          <form @submit="handleSubmit">
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
                  id="newTweet"
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
        const content = { description: this.newTweetContent }
        const { data } = await tweetsAPI.newTweet.create(content)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'main' })
        this.newTweetContent = ''
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法送出推文，請稍後再試'
        })
      }
    }
  }
}
</script>
