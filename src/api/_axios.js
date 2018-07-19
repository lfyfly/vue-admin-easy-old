import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // config.headers['X-X'] = 'xyxxxxx'
  if (localStorage.tocken) config.headers['tocken'] = localStorage.tocken
  return config
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
