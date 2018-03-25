import axios from 'axios'
import Config from '../config/config'

export default function createUser (email, password) {
  return axios.post(`${Config.serverUrl}/users`, { email, password })
}