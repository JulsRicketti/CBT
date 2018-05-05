import assert from 'assert'
import axios from 'axios'
import createChallenge from './createChallenge'
import Config from '../config/config'

describe('api/createChallenge', function () {
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
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}/challenges/${challenge.id}`, {params: { access_token: accessToken }})
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should create a new challenge', async function () {
    const title = 'Challenge 1'
    const description = 'I need to face my difficulties in order to complete the challenge'
    const difficulty = 8

    challenge = await createChallenge(user.id, accessToken, title, description, difficulty)

    assert.deepStrictEqual(challenge.title, title)
    assert.deepStrictEqual(challenge.description, description)
    assert.deepStrictEqual(challenge.difficulty, difficulty)
    assert.deepStrictEqual(challenge.status, 'incomplete')
  })
})