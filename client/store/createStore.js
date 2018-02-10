import {
  createStore as doCreateStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './ducks'

const allReducers = Object.assign({}, reducers, {
  routing: routerReducer
})

const composeEnhancers = typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
  ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

  const initialState = typeof __INITIAL_STATE__ === 'object'
  ? __INITIAL_STATE__
  : {}

export default function createStore () {
  return doCreateStore(
    combineReducers(allReducers),
    initialState
  )
}