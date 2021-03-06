import mock from '../mock'
import db from '../db'
import config from '@/config'

mock.onGet('/me').reply(function (cfg) {
  // axios config
  let tocken = cfg.headers[config.tockenKey]
  return [200, { type: 'susscess', data: db.get('users', { id: tocken })[0] }]
})

mock.onPut('/me').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  let tocken = cfg.headers[config.tockenKey]
  db.put('users', { id: tocken }, params)
  // axios config
  return [200, { type: 'success', message: '信息更新成功' }]
})

// 修改手机
mock.onGet('/getPhoneCaptcha').reply(function (cfg) {
  return [200, { type: 'success', message: '手机验证发送成功, 666666' }]
})

mock.onPost('/validatePhoneCaptcha').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  if (params.phoneCaptcha === '666666') {
    return [200, { type: 'success' }]
  } else {
    return [200, { type: 'warning', message: '手机验证码错误' }]
  }
})

mock.onPost('/modifyPhone').reply(function (cfg) {
  let tocken = cfg.headers[config.tockenKey]
  let params = JSON.parse(cfg.data)
  if (params.phoneCaptcha === '666666') {
    db.put('users', { id: tocken }, { phone: params.phone })
    return [200, { type: 'success', message: '手机修改成功' }]
  } else {
    return [200, { type: 'warning', message: '手机验证码错误' }]
  }
})

// 修改邮箱
mock.onGet('/getEmailCaptcha').reply(function (cfg) {
  return [200, { type: 'success', message: '邮箱验证发送成功, 888888' }]
})

mock.onPost('/validateEmailCaptcha').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  if (params.emailCaptcha === '888888') {
    return [200, { type: 'success' }]
  } else {
    return [200, { type: 'warning', message: '邮箱验证码错误' }]
  }
})
mock.onPost('/modifyEmail').reply(function (cfg) {
  let tocken = cfg.headers[config.tockenKey]
  let params = JSON.parse(cfg.data)
  if (params.emailCaptcha === '888888') {
    db.put('users', { id: tocken }, { email: params.email })
    return [200, { type: 'success', message: '邮箱修改成功' }]
  } else {
    return [200, { type: 'warning', message: '邮箱验证码错误' }]
  }
})
// 修改密码

mock.onPut('/modifyPassword').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  let tocken = cfg.headers[config.tockenKey]
  let user = db.get('users', { id: tocken })[0]

  if (params.password !== user.password) {
    return [401, { type: 'error', message: '原密码错误，修改失败' }]
  } else {
    db.put('users', { id: tocken }, { password: params.newPassword })

    return [200, { type: 'success', message: '密码修改成功' }]
  }
  // axios config
})
