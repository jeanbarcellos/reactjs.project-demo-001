import axios from 'axios'
import { errorObject, successObject } from './utils'

const clientAxios = async (endpoint, body = null, customConfig = {}) => {
  const requestConfig = {
    ...customConfig,
    method: customConfig.method,
    url: endpoint,
    data: body
  }

  return axios(requestConfig)
    .then(response => Promise.resolve(resolveResponse(response)))
    .catch(error => Promise.reject(resolveError(error)))
}

const resolveResponse = response => successObject(response.status, response.data, response.headers)

const resolveError = error => {
  if (error.response) {
    return errorObject(
      error.response.status || 500,
      error.response.data.message || error.request.statusText,
      error.response.data.errors || [],
      error.response.headers
    )
  }

  return errorObject(500)
}

export default clientAxios
