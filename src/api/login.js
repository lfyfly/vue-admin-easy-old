import _axios from './_axios'
import config from '@/config'
import router from '@/router'

export default function (params, ignore) {
  _axios.post('/login', params).then(res => {
    let tocken = res.data[config.tockenKey]
    // 登陆成功把平常tocken
    if (tocken) {
      localStorage[config.tockenKey] = tocken
      router.push('/')
    }
  })
}
