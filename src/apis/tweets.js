import { apiHelper } from '../utils/helpers'

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  newTweet: {
    create(formData) {
      return apiHelper.post('/tweets', formData)
    }
  },
  repliedTweet(formData) {
    const { content, tweetId } = formData
    return apiHelper.post(`/tweets/${tweetId}/replies`, content)
  }
}