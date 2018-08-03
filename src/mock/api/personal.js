import mock from '../mock'

mock.onGet('/me').reply(function (config) {
  // axios config
  return [200, {
    id: 89757,
    email: '123@qq.com',
    username: 'lfy',
    avatar: '/static/img/test-avartar.jpg',
    phone: '13011111111',
    role: 'admin',
    routers: ['/index', '/personal', '/a1/1', '/a1/2', '/a2/1', '/a2/2', '/b1/1', '/b1/2', '/b2/1']
  }]
})

mock.onPut('/me').reply(function (config) {
  console.log('【Put】 /me')
  console.log(config)
  if (config.params) console.table(config.params)
  console.table(config.headers)

  // axios config
  return [200, {
    msg: '更新成功'
  }]
})
