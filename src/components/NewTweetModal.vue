<template>
  <div>
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    />

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
                <img
                  class="content-img"
                  :src="currentUser.avatar | emptyImage"
                  alt=""
                />
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
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  mixins: [emptyImageFilter],
  components: { Loading },
  data() {
    return {
      image: null,
      isProcessing: false,
      newTweetContent: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    async handleSubmit(e) {
      try {
        this.isLoading = true
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

        this.$emit('after-create-tweet', this.newTweetContent)

        this.newTweetContent = ''
        this.isProcessing = false
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>
