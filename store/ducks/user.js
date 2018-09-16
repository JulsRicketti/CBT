const SET_LOGGED_IN_USER = 'admin/users/SET_LOGGED_IN_USER'
const SET_ACCESS_TOKEN = 'admin/users/SET_ACCESS_TOKEN'


const defaultState = {
  loggedInUser: '',
  accessToken: ''
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return Object.assign({}, state, { loggedInUser: action.loggedInUser })
    case SET_ACCESS_TOKEN:
      return Object.assign({}, state, { accessToken: action.accessToken })
    default:
      return state
  }
}

export function setLoggedInUser (value) {
  return {
    type: SET_LOGGED_IN_USER,
    loggedInUser: value
  }
}

export function setAccessToken (value) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken: value
  }
}