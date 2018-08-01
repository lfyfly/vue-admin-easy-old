import _axios from '../_axios'
import get from './get'

export default function (params) {
  return _axios.get('/me')
    .then(res => {
      // 更新成功，重新获取数据
      get()
    })
}
