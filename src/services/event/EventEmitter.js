// Link: https://betterprogramming.pub/how-to-create-your-own-event-emitter-in-javascript-fbd5db2447c4

class EventEmitter {
  constructor() {
    this.events = {}
  }

  _getEventsByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set()
    }
    return this.events[eventName]
  }

  // subscribe
  subscribe(eventName, callback) {
    console.info(`EventEmitter.subscribe() ${eventName}`)

    this._getEventsByName(eventName).add(callback)
  }

  // unsubscribe
  unsubscribe(eventName, callback) {
    console.info(`EventEmitter.unsubscribe() ${eventName}`)

    this._getEventsByName(eventName).delete(callback)
  }

  // dispatch
  emit(eventName, ...args) {
    console.info(`EventEmitter.emit() ${eventName}`)

    this._getEventsByName(eventName).forEach(
      // eslint-disable-next-line func-names
      function (callback) {
        callback.apply(this, args)
      }.bind(this)
    )
  }
}

const instance = new EventEmitter()

export default instance
