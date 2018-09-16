import assert from 'assert'
import axios from 'axios'
import removeThought from './removeThought'
import getThoughts from './getThoughts'
import Config from '../config/config'

describe('api/removeThought', function () {
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
    const where = 'Where'
    const what = 'What'
    const expectation = 'Expectation'
    const reality = 'Reality'

    const createThoughtResponse = await axios.post(`${Config.serverUrl}/thoughts`, {
      date, where, what, expectation, reality, userId: user.id},
    {params: { access_token: accessToken }
    })

    thought = createThoughtResponse.data
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should remove thought', async function () {
    
    const thoughts = await getThoughts(user.id, accessToken)
    const remainingThoughts = await removeThought(user.id, accessToken, thought.id, thoughts)

    assert.ok(!remainingThoughts.length) // since we only have one thought, the result will be empty array
  })
})