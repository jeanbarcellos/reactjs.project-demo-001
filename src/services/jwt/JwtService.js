import * as Api from 'api/authApi'
import jwtDecode from 'jwt-decode'
import { client } from 'services/http/client'
import eventEmitter from 'utils/EventEmitter'

const ACCESS_TOKEN = 'jwt_access_token'
const HTTP_HEADER_AUTHORIZATION = 'Authorization'

export const JwtServiceEvents = {
  AutoLogin: 'onAutoLogin',
  AutoLogout: 'onAutoLogout',
  NoAccessToken: 'onNoAccessToken'
}

class JwtService {
  init() {
    this.handleAuthentication()
  }

  login = (email, password) => {
    return new Promise((resolve, reject) => {
      Api.authLogin({ email, password })
        .then(response => {
          this._setSession(response.data.token)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      Api.authLoginWithToken(this._getAccessToken())
        .then(response => {
          this._setSession(response.data.token)
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          this._resetSession()
          reject(error)
        })
    })
  }

  logout = () => {
    this._resetSession()
  }

  handleAuthentication = () => {
    const accessToken = this._getAccessToken()

    if (!accessToken) {
      eventEmitter.emit(JwtServiceEvents.NoAccessToken)
      return
    }

    if (this._isValidAccessToken(accessToken)) {
      this._setSession(accessToken)
      eventEmitter.emit(JwtServiceEvents.AutoLogin)
      return
    }

    this._resetSession()
    eventEmitter.emit(JwtServiceEvents.AutoLogout, 'accessToken expired')
  }

  _setSession = accessToken => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken)
      client.addDefaultHeader(HTTP_HEADER_AUTHORIZATION, `Bearer ${accessToken}`)
      return
    }

    localStorage.removeItem(ACCESS_TOKEN)
    client.removeDefaultHeader(HTTP_HEADER_AUTHORIZATION)
  }

  _resetSession = () => {
    this._setSession(null)
  }

  _getAccessToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN)
  }

  _isValidAccessToken = accessToken => {
    if (!accessToken) {
      return false
    }

    const decoded = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000

    if (decoded.exp < currentTime) {
      console.warn('access token expired')
      return false
    }

    return true
  }
}

const instance = new JwtService()

export default instance
