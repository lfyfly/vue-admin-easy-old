import mock from '../mock'
import mockjs from 'mockjs'
mock
  .onGet('/users').reply(200, mockjs.mock({
    'total': 1000,
    'users|20': [{
      'id|+1': 1,
      'name': '@cname',
      'date': '@date("yyyy-MM-dd")',
      'address': '@city(true)',
      'email': '@email',
      'state|1': [0, 1],
      'gender|1': [0, 1],
      'avatar': '/static/avatar.jpg'
    }]
  }))
  .onPost('/users').reply(200, {msg: '创建成功'})
  .onPut('/users').reply(function (config) {
    return [200, {
      msg: '更新成功',
      updatedData: config.data
    }]
  })
  .onDelete('/users').reply(200, {msg: '删除成功'})
