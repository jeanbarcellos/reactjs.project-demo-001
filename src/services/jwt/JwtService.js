import * as Api from 'api/authApi'
import { client } from 'services/http/client'

const ACCESS_TOKEN = 'jwt_access_token'
const HTTP_HEADER_AUTHORIZATION = 'Authorization'

class JwtService {
  login = (email, password) => {
    return new Promise((resolve, reject) => {
      Api.authLogin({ email, password })
        .then(response => {
          console.log('JwtService.login() response', response)
          this.setSession(response.data.token)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
          console.log('JwtService.login() error', error)
        })
    })
  }

  setSession = accessToken => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken)
      client.addDefaultHeader(HTTP_HEADER_AUTHORIZATION, `Bearer ${accessToken}`)
      return
    }

    localStorage.removeItem(ACCESS_TOKEN)
    client.removeDefaultHeader(HTTP_HEADER_AUTHORIZATION)
  }
}

const instance = new JwtService()

export default instance
