import { client } from 'services/http/client'
import { mockResponseError, mockResponseSuccess } from 'services/http/utils'

const ENDPOINT = '/auth'

export const authLogin2 = model => client.post(`${ENDPOINT}/login`, model)

export const authLogin = model => {
  const response = {
    user: { id: 1, login: 'jeanbarcellos@teste.com.br' }
  }

  const responseError = {
    message: 'Usuário inválido',
    errors: []
  }

  return Math.random() < 0.5
    ? mockResponseSuccess(response)
    : mockResponseError(401, responseError.message, responseError.errors)
}
