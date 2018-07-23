import axios from 'axios'
import config from '@/config'
// 添加请求拦截器
axios.interceptors.request.use(cfg => {
  // 在发送请求之前做些什么
  // config.headers['X-X'] = 'xyxxxxx'
  if (localStorage[config.tockenKey]) cfg.headers[config.tockenKey] = localStorage[config.tockenKey]
  return cfg
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, (error, res) => {
  // 对响应错误统一做提示、

  return Promise.reject(error)
})

export default axios
