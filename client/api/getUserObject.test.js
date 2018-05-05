import assert from 'assert'
import axios from 'axios'
import getUserObject from './getUserObject'
import Config from '../config/config'

describe('api/getUserObject', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'

  before(async function () {
    const createUserResponse = await axios.post(`${Config.serverUrl}/users`, { email, password })
    user = createUserResponse.data

    const authenticateResponse = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authenticateResponse.data.id
  })

  after(async function () {
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should get the user object', async function () {
    const userObject = await getUserObject(user.id, accessToken)

    assert.deepStrictEqual(userObject.email, email)
  })
})