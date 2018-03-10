import axios from 'axios'
import Config from '../config/config'

export default function authenticate (email, password) {

  return axios.post(`${Config.serverUrl}/api/users/login`, { email, password })
    .then(res => {
      console.log('in authenticate:', res.data)
      const token = res.data.id
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('loggedInUserId', JSON.stringify(res.data.userId))
      return res
    })
}