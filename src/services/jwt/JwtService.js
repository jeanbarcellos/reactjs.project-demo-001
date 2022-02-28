import * as Api from 'api/authApi'

class JwtService {
  login = (email, password) => {
    return new Promise((resolve, reject) => {
      Api.authLogin({ email, password })
        .then(response => {
          console.log('JwtService.login() response', response)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
          console.log('JwtService.login() error', error)
        })
    })
  }
}

const instance = new JwtService()

export default instance
