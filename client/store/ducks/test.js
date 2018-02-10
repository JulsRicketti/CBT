const TEST = 'test/TEST'

const defaultState = {
  test: 'initial value'
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { enabled: action.enabled })
    default:
      return state
  }
}

export function setTest (value) {
  return {
    type: TEST,
    enabled: value
  }
}