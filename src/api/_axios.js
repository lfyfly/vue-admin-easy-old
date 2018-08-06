import axios from 'axios'
import config from '@/config'
import _log from './_log'
import { Message } from 'element-ui'

// 添加请求拦截器
axios.interceptors.request.use(cfg => {
  // 在发送请求之前做些什么
  // config.headers['X-X'] = 'xyxxxxx'
  if (localStorage[config.tockenKey]) cfg.headers[config.tockenKey] = localStorage[config.tockenKey]

  // console.log('请求打印')
  setTimeout(function () { _log.reqLog(cfg) })

  return cfg
}, function (error) {
  // 对请求错误做些什么
  alert('请求错误\n' + error)
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  // 统一对响应数据中的message进行提醒
  if (response.data && response.data.message) {
    Message({
      type: response.data.type || 'success',
      showClose: true,
      message: response.data.message
    })
  }
  _log.resLog(response.config, response)
  return response
}, (error) => {
  // 对响应错误统一做提示，后端需要定义好 error message
  // TODO 错误上报
  Message({
    type: 'error',
    message: error.message
  })

  return Promise.reject(error)
})

export default axios
