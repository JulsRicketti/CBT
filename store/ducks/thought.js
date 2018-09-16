const SET_THOUGHTS = 'challenge/SET_THOUGHTS'
const CURRENT_THOUGHT = 'challenge/CURRENT_THOUGHT'


const defaultState = {
  thoughts: [],
  currentThought: {}
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_THOUGHTS:
      return Object.assign({}, state, { thoughts: action.thoughts })
    case CURRENT_THOUGHT:
      return Object.assign({}, state, { currentThought: action.currentThought })
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

export function setCurrentThought (value) {
  return {
    type: CURRENT_THOUGHT,
    currentThought: value
  }
}