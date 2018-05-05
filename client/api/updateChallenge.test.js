import assert from 'assert'
import axios from 'axios'
import updateChallenge from './updateChallenge'
import Config from '../config/config'
import { create } from 'domain';
import { access } from 'fs';

describe('api/updateChallenge', function () {
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
    await axios.delete(`${Config.serverUrl}/users/${user.id}/challenges/${challenge.id}`, {params: { access_token: accessToken }})
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  const newTitle = 'newTitle'
  const newDescription = 'newDescription'
  const newDifficulty = 5
  const newStatus = 'complete'

  it('should update challenge', async function () {
    const updatedChallenge = await updateChallenge(user.id, accessToken, challenge.id, {title: newTitle, description: newDescription, difficulty: newDifficulty, status: newStatus})
    
    assert.deepStrictEqual(updatedChallenge.title, newTitle)
    assert.deepStrictEqual(updatedChallenge.description, newDescription)
    assert.deepStrictEqual(updatedChallenge.status, newStatus)
    assert.deepStrictEqual(updatedChallenge.difficulty, newDifficulty)
  })

  it('should not update falsy attributes', async function () {
    const newNewTitle = 'yet another title'
    const updatedChallenge = await updateChallenge(user.id, accessToken, challenge.id, {title: newNewTitle})
    
    assert.deepStrictEqual(updatedChallenge.title, newNewTitle)
    assert.deepStrictEqual(updatedChallenge.description, newDescription)
    assert.deepStrictEqual(updatedChallenge.status, newStatus)
    assert.deepStrictEqual(updatedChallenge.difficulty, newDifficulty)
  })
})