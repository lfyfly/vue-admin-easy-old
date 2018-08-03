let isDev = process.env.NODE_ENV === 'development'
export default {
  reqLog (config) {
    if (!isDev) return
    console.log(`【请求发送】【${config.method}】 ${config.url}`)
    if (config.data) console.table(config.data)
    // console.table(config.headers)
  },
  resLog (config, response) {
    if (!isDev) return
    console.log(`【响应成功】【${config.method}】 ${config.url}`, response.data)
  }
}
