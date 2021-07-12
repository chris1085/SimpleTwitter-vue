import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/users/current')
  },
  get({ userId = '' } = {}) {
    return apiHelper.get(`/users/${userId}`)
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
    return apiHelper.get('/users/top')
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
