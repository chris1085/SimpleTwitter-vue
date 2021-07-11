import { apiHelper } from '../utils/helpers'

export default {
  getTopUsers() {
    return apiHelper.get('/users')
  }
}
