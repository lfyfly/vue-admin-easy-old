import mock from '../mock'

mock.onGet('/me').reply(function (config) {
  console.log('[GET] /me')
  // axios config
  // console.log(config.params, config.headers)
  return [200, {
    email: '123@qq.com',
    username: 'lfy',
    phone: '13011111111',
    role: 'admin',
    routers: ['/a1/1', '/b1/2', '/b2/1']
  }]
})
