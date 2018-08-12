import mock from '../mock'
import db from '../db'
import config from '@/config'
mock.onPost('/login').reply(function (cfg) {
  // axios config
  let { email, password, captcha } = JSON.parse(cfg.data)
  if (captcha !== 'bqaoa') {
    return [200, {type: 'error', message: '验证码输入错误'}]
  }
  let findResult = db.get('users', { email, password })
  let tocken = findResult.length !== 0 ? findResult[0].id : ''
  if (tocken) {
    return [ 200, { type: 'susscess', [config.tockenKey]: db.get('users', { email, password })[0].id } ]
  } else {
    return [200, {type: 'error', message: '邮箱或者密码输入错误'}]
  }
})
