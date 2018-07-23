import _axios from './_axios'
import getMyInfo from './getMyInfo'
import config from '@/config'
export default function (params) {
  _axios.post('/login', params)
    .then(res => {
      let tocken = res.data[config.tockenKey]
      localStorage[config.tockenKey] = tocken
      getMyInfo()
    })
    .catch(err => console.log(err))
}
