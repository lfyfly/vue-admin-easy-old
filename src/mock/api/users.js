import mock from '../mock'
import db from '../db'

mock.onGet('/users').reply(function (cfg) {
  // axios config
  return [200, { type: 'susscess', data: db.get('users') }]
})

mock.onPut('/users').reply(function (cfg) {
  let params = JSON.parse(cfg.data)

  db.put('users', { id: params.id }, params)
  // axios config
  return [200, { type: 'success', message: '信息更新成功' }]
})

mock.onPost('/users').reply(function (cfg) {
  let params = JSON.parse(cfg.data)

  db.post('users', params, { id: db.tables.users.length + '' })
  // axios config
  return [200, { type: 'success', message: '信息更新成功' }]
})
