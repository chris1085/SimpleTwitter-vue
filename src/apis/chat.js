import { apiHelper } from '../utils/helpers'

export default {
  getHistory() {
    return apiHelper.get('/chat')
  }
}
