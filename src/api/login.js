import _axios from './_axios'
import personal from './personal'
import config from '@/config'

export default {
  login (params, ignore) {
    _axios.post('/login', params)
      .then(res => {
        if (ignore) return res
        let tocken = res.data[config.tockenKey]
        localStorage[config.tockenKey] = tocken
        personal.get()
      })
  }
}
