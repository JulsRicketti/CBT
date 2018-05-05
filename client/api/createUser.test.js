import assert from 'assert'
import axios from 'axios'
import createThought from './createThought'
import Config from '../config/config'
import createUser from './createUser'

describe('api/createUser', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'


  after(async function () {
    const authentication = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authentication.data.id
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should create a new user', async function () {
    user = await createUser(email, password)

    assert.deepStrictEqual(user.email, email)
    assert.notEqual(user.password, password)
  })
})