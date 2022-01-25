import React from 'react'
import withReducer from 'store/withReducer'
import config from '../../config'
import reducers from '../../store'

const LoginPage = () => {
  return <div>Login</div>
}

export default withReducer(config.moduleKey, reducers)(LoginPage)
