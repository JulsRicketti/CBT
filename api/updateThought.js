import axios from 'axios'
import Config from '../config/config'

export default function updateThought (userId, accessToken, thoughtId, attributes) {
  if(attributes.thinkingErrors) {
    attributes.thinkingErrors = attributes.thinkingErrors.toString()
  }

  return axios.patch(`${Config.serverUrl}/thoughts/${thoughtId}`,
    attributes,
    { params: { access_token: accessToken } })
  .then((updatedThought)=> updatedThought.data)
  .catch(err => console.log(err.response))
}
