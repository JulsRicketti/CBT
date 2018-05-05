import axios from 'axios'
import Config from '../config/config'

export default function updateChallenge (userId, accessToken, challengeId, attributes) {

  return axios.patch(`${Config.serverUrl}/challenges/${challengeId}`,
  attributes,
    { params: { access_token: accessToken } })
  .then((updatedChallenge)=> updatedChallenge.data)
  .catch(err => console.log(err))
}
