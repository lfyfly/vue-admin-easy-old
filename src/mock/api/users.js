import mock from '../mock'
import db from '../db'

mock.onGet('/users').reply(function (cfg) {
  // axios config
  return [200, { type: 'susscess', data: db.get('users') }]
})
