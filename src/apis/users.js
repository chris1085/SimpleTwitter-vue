import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/users/current')
  },
  get(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  getTotalUser() {
    return apiHelper.get('/admin/users')
  },
  putUser(userId, payload) {
    return apiHelper.put(`/users/${userId}`, payload)
  },
  setUser(payload) {
    return apiHelper.post('/users', payload)
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getTopUsers() {
    return apiHelper.get('/users')
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addFollowing({ userId }) {
    const id = { id: userId }
    return apiHelper.post('/followships', id)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/followships/${userId}`)
  },
  getFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  getFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  updateUserProfile({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserLikeTweets(userId) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getUserRepliedTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  }
}
