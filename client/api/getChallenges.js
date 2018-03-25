import axios from 'axios'
import Config from '../config/config'

export default function getChallenges (userId, accessToken) {
  return axios.get(`${Config.serverUrl}/users/${userId}/challenges`, {params: { access_token: accessToken }})
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))
}
