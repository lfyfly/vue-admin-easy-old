import mock from '../mock'
import db from '../db'
import config from '@/config'

mock.onGet('/me').reply(function (cfg) {
  // axios config
  let tocken = cfg.headers[config.tockenKey]
  return [200, db.get('users', { id: tocken })[0]]
})

mock.onPut('/me').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  let tocken = cfg.headers[cfg.tockenKey]
  db.put('users', { id: tocken }, params)
  // axios config
  return [200, {
    message: '信息更新成功'
  }]
})

// 修改手机
mock.onGet('/getPhoneCaptcha').reply(function (cfg) {
  return [200, {
    message: '手机验证发送成功, 666666'
  }]
})

mock.onPost('/validatePhoneCaptcha').reply(function (cfg) {
  alert(cfg.data)
  let params = JSON.parse(cfg.data)
  alert(params.phoneCaptcha)
  if (params.phoneCaptcha === '666666') {
    return [200]
  } else {
    return [401]
  }
})

// 修改邮箱
mock.onGet('/getEmailCaptcha').reply(function (cfg) {
  return [200, {
    message: '邮箱验证发送成功, 888888'
  }]
})

mock.onPut('/modifyPassword').reply(function (cfg) {
  let params = JSON.parse(cfg.data)
  let tocken = cfg.headers[config.tockenKey]
  let user = db.get('users', { id: tocken })[0]

  if (params.password !== user.password) {
    return [401, {
      message: '原密码错误，修改失败'
    }]
  } else {
    db.put('users', { id: tocken }, {password: params.newPassword})

    return [200, {
      message: '密码修改成功'
    }]
  }
  // axios config
})
