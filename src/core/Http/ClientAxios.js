import axios from 'axios'

const ClientAxios = async (endpoint, body = null, customConfig = {}) => {
  const requestConfig = {
    ...customConfig,
    method: customConfig.method,
    url: endpoint,
    data: body
  }

  console.log('requestConfig', requestConfig)

  return axios(requestConfig)
    .then(response => Promise.resolve(resolveResponse(response)))
    .catch(error => Promise.reject(resolveError(error)))
}

const resolveResponse = response => {
  return {
    success: true,
    code: response.status || 200,
    headers: response.headers || null,
    // ...
    data: response.data || null,
    message: response.data.message || null
  }
}

const resolveError = error => {
  if (error.response) {
    return errorObject(
      error.response.status || 500,
      error.response.data.message || error.request.statusText,
      error.response.data.errors || [],
      error.response.headers
    )
  }

  return errorObject(500, error.message)
}

const errorObject = (code, message, errors, headers) => {
  return {
    success: false,
    code: code || 400,
    headers: headers || null,
    // ...
    message: message || null,
    errors: errors || []
  }
}

export default ClientAxios
