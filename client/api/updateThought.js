import axios from 'axios'
import Config from '../config/config'

export default function updateChallenge (userId, accessToken, thoughtId, attributes) {
  console.warn('thoughtId', thoughtId)
  if(attributes.thinkingErrors) {
    attributes.thinkingErrors = attributes.thinkingErrors.toString()
    console.warn('attributes.thinkingErrors', attributes.thinkingErrors)
  }
  return axios.patch(`${Config.serverUrl}/thoughts/${thoughtId}`,
    attributes,
    { params: { access_token: accessToken } })
  .then((updatedChallenge)=> updatedChallenge.data)
  .catch(err => console.log(err))
}
