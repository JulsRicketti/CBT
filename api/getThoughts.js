import axios from 'axios'
import Config from '../config/config'

export default function getThoughts (userId, accessToken) {
  return axios.get(`${Config.serverUrl}/users/${userId}/thoughts`, {params: { access_token: accessToken }})
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))
}
