import React from 'react'
import sessionStorageStore from './sessionStorageStore'
import memoryStorageStore from './memoryStorageStore'
import localStorageStore from './localStorageStore'

function createConnect (mapStoreToProps, store) {
  return function (Component) {
    let snapshot = {}

    const updateStoreView = (props) => {
      snapshot = mapStoreToProps(store, props)
    }

    return class extends React.Component {
      constructor (props, context) {
        updateStoreView(props)
        super(props, context)
      }

      componentWillMount () {
        this.sub = store.subscribe(() => {
          updateStoreView(this.props)
          this.forceUpdate()
        })
      }

      componentWillUpdate () {
        updateStoreView(this.props)
      }

      componentWillUnmount () {
        this.sub && this.sub.dispose && this.sub.dispose()
      }

      render () {
        return <Component {...Object.assign({}, snapshot, this.props)} />
      }
    }
  }
}

export function withSessionStore (mapStoreToProps) {
  return createConnect(mapStoreToProps, sessionStorageStore)
}

export function withMemoryStore (mapStoreToProps) {
  return createConnect(mapStoreToProps, memoryStorageStore)
}

export function withLocalStore (mapStoreToProps) {
  return createConnect(mapStoreToProps, localStorageStore)
}