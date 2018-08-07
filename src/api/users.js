import _axios from './_axios'

export default {
  get () {
    return _axios.get('/users')
  },
  put (params) {
    return _axios.put('/users', params)
  },
  post (params) {
    return _axios.post('/users', params)
  },
  delete (params) {
    return _axios.put('/users', params)
  }
}
