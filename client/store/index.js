import * as user from './ducks/user'
export { default as createStore } from './createStore'

export const actions = Object.assign(
  { user }
)