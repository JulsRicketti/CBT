import axios from 'axios'
import Config from '../config/config'

export default function authenticate (email, password) {

  return axios.post(`${Config.serverUrl}/api/users/login`, { email, password })
    .then(res => {
      const token = res.data.id
      localStorage.setItem('jwtToken', token)
      return res
    })
}