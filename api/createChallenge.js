import axios from 'axios'
import Config from '../config/config'

export default function createChallenge (userId, accessToken, title, description, difficulty) {
  return axios.post(`${Config.serverUrl}/challenges`, {
    title, description, difficulty, status: 'incomplete', userId},
    {params: { access_token: accessToken }
  })
  .then((newChallenge)=> newChallenge.data)
  .catch(err => console.log(err))
}
