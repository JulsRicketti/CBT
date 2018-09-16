import assert from 'assert'
import axios from 'axios'
import createThought from './createThought'
import Config from '../config/config'

describe('api/createThought', function () {
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
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}/thoughts/${thought.id}`, {params: { access_token: accessToken }})
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should create a new thought', async function () {
    const date = '2018-05-05T00:00:00.000Z'
    const where = 'In my classroom'
    const what = 'I needed to present a project which I was not ready for'
    const expectation = 'All would go relatively well, people wouldnt pay attention anyway'
    const reality = 'Someone asked me a question which prompted a discussion and I made a fool out of myself'

    thought = await createThought(user.id, accessToken, date, where, what, expectation, reality)

    assert.deepStrictEqual(thought.date, date)
    assert.deepStrictEqual(thought.where, where)
    assert.deepStrictEqual(thought.what, what)
    assert.deepStrictEqual(thought.expectation, expectation)
    assert.deepStrictEqual(thought.reality, reality)
  })
})