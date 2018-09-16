export default function unauthenticate () {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('loggedInUserId')
}