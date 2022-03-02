import { bindActionCreators } from '@reduxjs/toolkit'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, resetUser } from 'store/app/auth/userSlice'
import { severity, showMessage } from 'store/app/messageSlice'
import eventEmitter from 'utils/EventEmitter'
import jwtService, { JwtServiceEvents } from 'services/jwt/JwtService'

class Authentication extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    return Promise.all([this.authCheck()]).then(() => {
      this.setState({ loaded: true })
    })
  }

  authCheck = () =>
    new Promise(resolve => {
      eventEmitter.on(JwtServiceEvents.AutoLogin, () => {
        this.props.showMessage({ message: 'Logging in with JWT', severity: severity.INFO })

        jwtService
          .loginWithToken()
          .then(user => {
            this.props.setUser(user)

            resolve()

            this.props.showMessage({ message: 'Logged in with JWT', severity: severity.SUCCESS })
          })
          .catch(error => {
            this.props.showMessage({ message: error.message, severity: severity.ERROR })

            resolve()
          })
      })

      eventEmitter.on(JwtServiceEvents.AutoLogout, message => {
        if (message) {
          this.props.showMessage({ message })
        }

        this.props.logout()

        resolve()
      })

      eventEmitter.on(JwtServiceEvents.NoAccessToken, () => {
        resolve()
      })

      jwtService.init()

      return Promise.resolve()
    })

  render() {
    return this.state.loaded ? <>{this.props.children}</> : <div>Carregando ...</div>
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: resetUser,
      setUser,
      showMessage
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Authentication)
