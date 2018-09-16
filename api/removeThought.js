import axios from 'axios'
import Config from '../config/config'

export default function removeThought (userId, accessToken, thoughtId, thoughts) {
  return axios.delete(`${Config.serverUrl}/users/${userId}/thoughts/${thoughtId}`, {params: { access_token: accessToken }})
    .then(() => {
      // need to filter out the removed challenge
      return thoughts.filter(x => x.id !== thoughtId)
    })
    .catch(err => console.log(err))
}