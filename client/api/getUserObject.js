import axios from 'axios'
import Config from '../config/config'

export default function getUserObject (userId, accessToken) {
  return axios.get(`${Config.serverUrl}/users/${userId}`, {params: {access_token: accessToken}})
    .then (user => {
      return user.data
    })
}