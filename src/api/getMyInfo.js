import _axios from './_axios'
import store from '@/store'

export default function (params) {
  return _axios.get('/me')
    .then(res => {
      let MyInfo = res.data
      store.commit('setMyInfo', MyInfo)
    })
    .catch(err => console.log(err))
}
