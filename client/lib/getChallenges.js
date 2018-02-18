import axios from 'axios'
import Config from '../config/config'

export default function getChallenges (user) {
  axios.get(`${Config.serverUrl}/api/challenges`, {params: { access_token: user.id }})
  .then(res => {
    this.setState({ challenges: res.data })
  })
}