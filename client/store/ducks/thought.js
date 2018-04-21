const SET_THOUGHTS = 'challenge/SET_THOUGHTS'

const defaultState = {
  thoughts: []
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_THOUGHTS:
      return Object.assign({}, state, { thoughts: action.thoughts })
    default:
      return state
  }
}

export function setThoughts (value) {
  return {
    type: SET_THOUGHTS,
    thoughts: value
  }
}