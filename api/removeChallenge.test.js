import assert from 'assert'
import axios from 'axios'
import removeChallenge from './removeChallenge'
import getChallenges from './getChallenges'
import Config from '../config/config'
import { create } from 'domain';

describe('api/removeChallenge', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'
  let challenge

  before(async function () {
    const createUserResponse = await axios.post(`${Config.serverUrl}/users`, { email, password })
    user = createUserResponse.data

    const authenticateResponse = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authenticateResponse.data.id

    const title = 'Challenge 1'
    const description = 'I need to face my difficulties in order to complete the challenge'
    const difficulty = 8
    const status = 'incomplete'

    const createChallengeResponse = await axios.post(`${Config.serverUrl}/challenges`, {
      title, description, difficulty, status, userId: user.id},
    {params: { access_token: accessToken }
    })

    challenge = createChallengeResponse.data
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should remove challenge', async function () {
    
    const challenges = await getChallenges(user.id, accessToken)
    const remainingChallenges = await removeChallenge(user.id, accessToken, challenge.id, challenges)

    assert.ok(!remainingChallenges.length) // since we only have one challenge, the result will be an empty array
  })
})