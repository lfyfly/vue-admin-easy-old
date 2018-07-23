import mock from '../mock'

mock.onGet('/me').reply(function (config) {
  console.log('[GET] /me')
  // axios config
  // console.log(config.params, config.headers)
  return [200, {
    email: '123@qq.com',
    username: 'lfy',
    avatar: '/static/img/test-avartar.jpg',
    phone: '13011111111',
    role: 'admin',
    routers: ['/personal', '/a1/1', '/a1/2', '/a2/1', '/a2/2', '/b1/1', '/b1/2', '/b2/1']
  }]
})
