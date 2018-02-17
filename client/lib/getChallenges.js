import axios from 'axios'

export default function getChallenges (user) {
  axios.get('http://localhost:3001/api/challenges', {params: { access_token: user.id }})
  .then(res => {
    this.setState({ challenges: res.data })
  })
}