import axios from 'axios'
import Config from '../config/config'

export default function updateChallenge (userId, accessToken, thoughtId, date, where, what, expectation, reality, strengthInitial, automaticThought, supportingEvidence, nonSupportingEvidence, thinkingErrors, newBelief, strengthFinal) {
  return axios.patch(`${Config.serverUrl}/thoughts/${thoughtId}`,
    { date, where, what, expectation, reality, strengthInitial, automaticThought, supportingEvidence, nonSupportingEvidence, thinkingErrors, newBelief, strengthFinal, userId },
    { params: { access_token: accessToken } })
  .then((updatedChallenge)=> updatedChallenge.data)
  .catch(err => console.log(err))
}
