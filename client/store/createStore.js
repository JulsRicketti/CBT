import {
  createStore as doCreateStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './ducks'

/* global __REDUX_DEVTOOLS_EXTENSION_COMPOSE__, __INITIAL_STATE__ */

const allReducers = Object.assign({}, reducers, {
  routing: routerReducer
})

export default function createStore (...middlewares) {
  return doCreateStore(
    combineReducers(allReducers),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}