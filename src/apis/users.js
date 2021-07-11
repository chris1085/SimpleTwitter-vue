import { apiHelper } from './../utils/helpers'

export default {
  putUser(userId, payload) {
    return apiHelper.put(`/users/${userId}`, payload)
  },
  setUser(payload) {
    return apiHelper.post('/users', payload)
  }
}
