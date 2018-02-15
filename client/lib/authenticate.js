import axios from 'axios'

export default function authenticate (email, password) {

  return axios.post('http://localhost:3001/api/users/login', { email, password })
    .then(res => {
      const token = res.data.id
      localStorage.setItem('jwtToken', token)
      return res
    })
}