import _axios from './_axios'
import store from '@/store'
export default {
  get (params, ignore) {
    return _axios.get('/me').then(res => {
      if (ignore) return res
      store.commit('setMyInfo', res.data)
      return res
    })
  },
  put (params) {
    return _axios.put('/me', ...params)
  }
}
