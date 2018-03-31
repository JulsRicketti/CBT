import axios from 'axios'
import Config from '../config/config'

export default function updateChallenge (userId, accessToken, challengeId, title, description, difficulty, status) {
  return axios.patch(`${Config.serverUrl}/challenges/${challengeId}`,
    { title, description, difficulty, status, userId },
    { params: { access_token: accessToken } })
  .then((updatedChallenge)=> updatedChallenge.data)
  .catch(err => console.log(err))
}
