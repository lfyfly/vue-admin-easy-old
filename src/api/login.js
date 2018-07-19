import _axios from './_axios'
import getMyInfo from './getMyInfo'

export default function (params) {
  _axios.post('/login', params)
    .then(res => {
      let tocken = res.data.tocken
      localStorage.tocken = tocken
      getMyInfo()
    })
    .catch(err => console.log(err))
}
