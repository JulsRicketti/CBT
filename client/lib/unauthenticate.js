export default function unauthenticate () {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('loggedInUserId')
}