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

  on(eventName, fn) {
    this._getEventsByName(eventName).add(fn)
  }

  removeListener(eventName, fn) {
    this._getEventsByName(eventName).delete(fn)
  }

  emit(eventName, ...args) {
    this._getEventsByName(eventName).forEach(
      // eslint-disable-next-line func-names
      function (fn) {
        fn.apply(this, args)
      }.bind(this)
    )
  }
}

const instance = new EventEmitter()

export default instance
