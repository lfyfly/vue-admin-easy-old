import axios from 'axios'
import config from '@/config'
import _log from './_log'

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
  _log.resLog(response.config, response)

  return response
}, (error, res) => {
  // 对响应错误统一做提示、
  alert(error)
  return Promise.reject(error)
})

export default axios
