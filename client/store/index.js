import * as user from './ducks/user'
import * as challenge from './ducks/challenge'
export { default as createStore } from './createStore'

export const actions = Object.assign(
  { user },
  { challenge }
)