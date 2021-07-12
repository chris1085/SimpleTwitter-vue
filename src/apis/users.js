import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/users/current')
  },
  get({ userId = '' } = {}) {
    return apiHelper.get(`/users/${userId}`)
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
  addLike(userId) {
    return apiHelper.post(`/tweets/${userId}/like`, null)
  },
  deleteLike(userId) {
    return apiHelper.post(`/tweets/${userId}/unlike`)
  },
  addFollowing({ userId }) {
    const id = { id: userId }
    return apiHelper.post('/followships', id)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/followships/${userId}`)
  }
}
