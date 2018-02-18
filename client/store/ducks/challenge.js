const SET_CHALLENGES = 'challenge/SET_CHALLENGES'
const SET_NEW_CHALLENGE = 'challenge/SET_NEW_CHALLENGE'


const defaultState = {
  challenges: []
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_CHALLENGES:
      return Object.assign({}, state, { challenges: action.challenges })
    case SET_NEW_CHALLENGE:
      const challenges = Array.from(state.challenges)
      challenges.push(action.challenges)
      return Object.assign({}, state, { challenges })
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

export function setNewChallenge (value) {
  return {
    type: SET_NEW_CHALLENGE,
    challenges: value
  }
}