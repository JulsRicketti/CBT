export default function createStore (storageEngine = null) {
  let subscribers = []

  const retrievePersistedStore = () => {
    if (!storageEngine) {
      return
    }

    let payload = storageEngine.getItem('store')

    try {
      return JSON.parse(payload)
    } catch (e) {
      return null
    }
  }

  let store = retrievePersistedStore() || {}

  const persistStore = () => {
    if (!storageEngine) {
      return
    }

    let payload

    try {
      payload = JSON.stringify(store)
    } catch (e) {
      payload = null
    }

    storageEngine.setItem('store', payload)
  }

  const publish = (target, key, value) => {
    subscribers.forEach(fn => {
      if (fn) {
        fn(target, key, value)
      }
    })
  }

  // Provide a subscribe method on the store that will notify the provided callback
  // with the target object that will be changed (set/del) along with key and value.
  // Returns an object (handle) with a dispose method that should be called to
  // unsubscribe.
  const subscribe = (fn) => {
    var n = subscribers.push(fn)
    return {
      dispose () {
        subscribers[n - 1] = null
      }
    }
  }

  // Provide a default mechanism for copying store with state
  const copyToState = (keys, setState) => {
    keys.forEach(key => {
      if (key in store) {
        setState({[key]: store[key]})
      }
    })
  }

  const isEmpty = () => {
    return Object.keys(store).length === 0
  }

  // Expose specific methods on the store
  Object.defineProperty(store, 'subscribe', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (fn) {
      return subscribe(fn)
    }
  })

  Object.defineProperty(store, 'copyToState', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (state, setState) {
      return copyToState(state, setState)
    }
  })

  Object.defineProperty(store, 'isEmpty', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      return isEmpty()
    }
  })

  return new Proxy(store, {
    set (target, key, value) {
      let changed = JSON.stringify(value) !== JSON.stringify(target[key])
      target[key] = value
      if (changed) {
        persistStore()
        publish(target, key, value)
      }
      return true
    },
    get (target, key) {
      return target[key]
    },
    deleteProperty (target, key) {
      if (key in target) {
        delete target[key]
        persistStore()
        publish(target, key, undefined)
        return true
      }
      return false
    }
  })
}