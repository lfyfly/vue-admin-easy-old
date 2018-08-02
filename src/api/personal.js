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
  },
  // 修改手机
  getPhoneCaptcha () {
    return _axios.get('/getPhoneCaptcha')
  },
  validatePhoneCaptcha (params) {
    return _axios.post('/validatePhoneCaptcha', params)
  },
  modifyPhone (params) {
    return _axios.post('/modifyPhone', params)
  },
  // 修改邮箱
  getEmailCaptcha () {
    return _axios.get('/getPhoneCaptcha')
  },
  validateEmailCaptcha (params) {
    return _axios.post('/validatePhoneCaptcha', params)
  },
  modifyEmail (params) {
    return _axios.post('/modifyPhone', params)
  },
  // 修改密码
  modifyPassword (params) {
    return _axios.post('/modifyPassword', params)
  }
}
