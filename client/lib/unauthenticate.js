export default function unauthenticate () {
  localStorage.removeItem('jwtToken')
}