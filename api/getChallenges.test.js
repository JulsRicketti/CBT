import assert from 'assert'
import axios from 'axios'
import getChallenges from './getChallenges'
import Config from '../config/config'

describe('api/getChallenges', function () {
  let user
  let accessToken
  let email = 'test@email.com'
  let password = '123'
  let challenges

  const challengeList = [
    {
      title: 'Challenge 1',
      description: 'Describe Challenge 1',
      difficulty: 8
    },
    {
      title: 'Challenge 2',
      description: 'Describe Challenge 2',
      difficulty: 8
    },
    {
      title: 'Challenge 3',
      description: 'Describe Challenge 3',
      difficulty: 8
    }
  ]

  before(async function () {
    const createUserResponse = await axios.post(`${Config.serverUrl}/users`, { email, password })
    user = createUserResponse.data

    const authenticateResponse = await axios.post(`${Config.serverUrl}/users/login`, { email, password })
    accessToken = authenticateResponse.data.id

    for (let index in challengeList) {
      let challenge = challengeList[index]

      await axios.post(`${Config.serverUrl}/challenges`, {
        title: challenge.title, description: challenge.description, difficulty: challenge.difficulty, status: 'incomplete', userId: user.id},
      {params: { access_token: accessToken }
      })
    }
  })

  after(async function () {
    for (let index in challenges) {
      const challenge = challenges[index]
      await axios.delete(`${Config.serverUrl}/users/${user.id}/challenges/${challenge.id}`, {params: { access_token: accessToken }})
    }
    await axios.delete(`${Config.serverUrl}/users/${user.id}`, {params: { access_token: accessToken }})
  })

  it('should get all of the current users challenges', async function () {
    challenges = await getChallenges(user.id, accessToken)

    challengeList.forEach((challenge, index) => {
      assert.deepStrictEqual(challenge.title, challenges[index].title)
      assert.deepStrictEqual(challenge.description, challenges[index].description)
      assert.deepStrictEqual(challenge.difficulty, challenges[index].difficulty)
    })

  })
})