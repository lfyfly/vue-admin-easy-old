import _axios from './_axios'
import personal from './personal'
import config from '@/config'
export default function (params) {
  _axios.post('/login', params)
    .then(res => {
      let tocken = res.data[config.tockenKey]
      localStorage[config.tockenKey] = tocken
      personal.get()
    })
}
