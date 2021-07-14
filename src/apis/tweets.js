import { apiHelper } from '../utils/helpers'

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  deleteTweet({ tweetId }) {
    console.log(tweetId)
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  },
  getReplyTweet(replyId) {
    return apiHelper.get(`/tweets/${replyId}`)
  },
  getRepies(replyId) {
    return apiHelper.get(`/tweets/${replyId}/replies`)
  },
  newTweet: {
    create(formData) {
      return apiHelper.post('/tweets', formData)
    }
  },
  repliedTweet(formData) {
    const { content, tweetId } = formData
    return apiHelper.post(`/tweets/${tweetId}/replies`, content)
  },
  addLike(userId) {
    return apiHelper.post(`/tweets/${userId}/like`, null)
  },
  deleteLike(userId) {
    return apiHelper.post(`/tweets/${userId}/unlike`)
  }
}
