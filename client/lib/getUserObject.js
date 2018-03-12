import axios from 'axios'
import Config from '../config/config'

export default function getUserObject (userId, accessToken) {
  return axios.get(`${Config.serverUrl}/api/users/${userId}`, {params: {access_token: accessToken}})
    .then (user => {
      console.log('user', user)
      return user.data
    })
}