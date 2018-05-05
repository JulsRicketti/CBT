import assert from 'assert'
import axios from 'axios'
import updateThought from './updateThought'
import Config from '../config/config'
import { create } from 'domain';
import { access } from 'fs';

describe('api/updateThought', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'
  let thought

  before(async function () {
    const createUserResponse = await axios.post(`${Config.serverUrl}/users`, { email, password })
    user = createUserResponse.data

    const authenticateResponse = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authenticateResponse.data.id

    const date = '2018-05-05T00:00:00.000Z'
    const where = 'Where 1'
    const what = 'What 1'
    const expectation = 'Expectation 1'
    const reality = 'Reality 1'

    const createThoughtResponse = await axios.post(`${Config.serverUrl}/thoughts`, {
      date, where, what, expectation, reality, userId: user.id},
    {params: { access_token: accessToken }
    })

    thought = createThoughtResponse.data
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}/thoughts/${thought.id}`, {params: { access_token: accessToken }})
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  const newDate = '2018-06-05T00:00:00.000Z'
  const newWhere = 'newWhere'
  const newWhat = 'newWhat'
  const newExpectation = 'newExpectation'
  const newReality = 'newReality'

  it('should update thought', async function () {
    const updatedThought = await updateThought(user.id, accessToken, thought.id, {date: newDate, where: newWhere, what: newWhat, expectation: newExpectation, reality: newReality})
    
    assert.deepStrictEqual(updatedThought.date, newDate)
    assert.deepStrictEqual(updatedThought.where, newWhere)
    assert.deepStrictEqual(updatedThought.what, newWhat)
    assert.deepStrictEqual(updatedThought.expectation, newExpectation)
    assert.deepStrictEqual(updatedThought.reality, newReality)
  })

  it('should not update falsy attributes', async function () {
    const newNewWhere = 'newWhere123'

    const updatedThought = await updateThought(user.id, accessToken, thought.id, {where: newNewWhere})
    
    assert.deepStrictEqual(updatedThought.date, newDate)
    assert.deepStrictEqual(updatedThought.where, newNewWhere)
    assert.deepStrictEqual(updatedThought.what, newWhat)
    assert.deepStrictEqual(updatedThought.expectation, newExpectation)
    assert.deepStrictEqual(updatedThought.reality, newReality)
  })
})