import axios from 'axios'
import Config from '../config/config'

export default function createThought (userId, accessToken, date, where, what, expectation, reality) {
  return axios.post(`${Config.serverUrl}/thoughts`, {
    date, where, what, expectation, reality, userId},
    {params: { access_token: accessToken }
  })
  .then((newThought)=> newThought.data)
  .catch(err => console.log(err))
}
