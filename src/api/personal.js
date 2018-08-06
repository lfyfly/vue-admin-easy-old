import _axios from './_axios'
import store from '@/store'
export default {
  get (params, ignore) {
    return _axios.get('/me')
      .then(res => {
        if (ignore) return res
        store.commit('setMyInfo', res.data.data)
        return res
      })
  },
  put (params) {
    return _axios.put('/me', params)
      .then(res => {
        // 更新用户信息
        if (res.data.type === 'success') this.get()
        return res
      })
  },
  // 修改手机
  getPhoneCaptcha () {
    return _axios.get('/getPhoneCaptcha')
  },
  validatePhoneCaptcha (params) {
    return _axios.post('/validatePhoneCaptcha', params)
  },
  modifyPhone (params) {
    return _axios.post('/modifyPhone', params).then(res => {
      if (res.data.type === 'success') this.get()
      return res
    })
  },
  // 修改邮箱
  getEmailCaptcha () {
    return _axios.get('/getEmailCaptcha')
  },
  validateEmailCaptcha (params) {
    return _axios.post('/validateEmailCaptcha', params)
  },
  modifyEmail (params) {
    return _axios.post('/modifyEmail', params).then(res => {
      if (res.data.type === 'success') this.get()
      return res
    })
  },
  // 修改密码
  modifyPassword (params) {
    return _axios.put('/modifyPassword', params)
  }
}
