import * as user from './ducks/user'
import * as challenge from './ducks/challenge'
import * as thought from './ducks/thought'
export { default as createStore } from './createStore'

export const actions = Object.assign(
  { user },
  { challenge },
  { thought }
)