import React from 'react'
import store from 'app/store'

const withReducer = (key, reducer) => WrappedComponent => {
  store.injectReducer(key, reducer)

  return props => <WrappedComponent {...props} />
}

export default withReducer
