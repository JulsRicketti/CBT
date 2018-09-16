import assert from 'assert'
import axios from 'axios'
import getThoughts from './getThoughts'
import Config from '../config/config'

describe('api/getThoughts', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'
  let thoughts

  const thoughtList = [
    {
      date: '2018-05-05T00:00:00.000Z',
      where: 'Where 1',
      what: 'What 1',
      expectation: 'Expectation 1',
      reality: 'Reality 1'
    },
    {
      date: '2018-05-05T00:00:00.000Z',
      where: 'Where 1',
      what: 'What 1',
      expectation: 'Expectation 1',
      reality: 'Reality 1'
    },
    {
      date: '2018-05-05T00:00:00.000Z',
      where: 'Where 1',
      what: 'What 1',
      expectation: 'Expectation 1',
      reality: 'Reality 1'
    }
  ]

  before(async function () {
    const createUserResponse = await axios.post(`${Config.serverUrl}/users`, { email, password })
    user = createUserResponse.data

    const authenticateResponse = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authenticateResponse.data.id

    for (let index in thoughtList) {
      let thought = thoughtList[index]

      await axios.post(`${Config.serverUrl}/thoughts`, {
        date: thought.date, where: thought.where, what: thought.what, reality: thought.reality, expectation: thought.expectation, userId: user.id},
        {params: { access_token: accessToken }
      })
    }
  })

  after(async function () {
    for (let index in thoughts) {
      const thought = thoughts[index]
      await axios.delete(`${Config.serverUrl}/users/${user.id}/thoughts/${thought.id}`, {params: { access_token: accessToken }})
    }
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should get all of the current users thoughts', async function () {
    thoughts = await getThoughts(user.id, accessToken)

    thoughtList.forEach((thought, index) => {
      assert.deepStrictEqual(thought.date, thoughts[index].date)
      assert.deepStrictEqual(thought.where, thoughts[index].where)
      assert.deepStrictEqual(thought.what, thoughts[index].what)
      assert.deepStrictEqual(thought.expectation, thoughts[index].expectation)
      assert.deepStrictEqual(thought.reality, thoughts[index].reality)
    })

  })
})