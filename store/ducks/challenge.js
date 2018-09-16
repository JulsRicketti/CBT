const SET_CHALLENGES = 'challenge/SET_CHALLENGES'


const defaultState = {
  challenges: []
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_CHALLENGES:
      return Object.assign({}, state, { challenges: action.challenges })
    default:
      return state
  }
}

export function setChallenges (value) {
  return {
    type: SET_CHALLENGES,
    challenges: value
  }
}