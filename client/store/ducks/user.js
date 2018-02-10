const SET_LOGGED_IN_USER = 'admin/users/SET_LOGGED_IN_USER'


const defaultState = {
  loggedInUser: undefined
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return Object.assign({}, state, { loggedInUser: action.loggedInUser })
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