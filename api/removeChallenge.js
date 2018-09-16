import axios from 'axios'
import Config from '../config/config'

export default function removeChallenge (userId, accessToken, challengeId, challenges) {
  return axios.delete(`${Config.serverUrl}/users/${userId}/challenges/${challengeId}`, {params: { access_token: accessToken }})
    .then(() => {
      // need to filter out the removed challenge
      return challenges.filter(x => x.id !== challengeId)
    })
    .catch(err => console.log(err))
}