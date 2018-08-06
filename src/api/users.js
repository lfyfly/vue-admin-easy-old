import _axios from './_axios'

export default {
  get () {
    return _axios.get('/users')
  }
}
