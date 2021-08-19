// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

import config from 'app/config'
import ClientAxios from './ClientAxios'

export async function Client(endpoint, { body, ...customConfig } = {}) {
  const path = config.api.baseUrl + endpoint
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  const requestConfig = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    },
  }

  return ClientAxios(path, body, requestConfig)

  // ***************************************************************************
}

Client.get = function (endpoint, customConfig = {}) {
  return Client(endpoint, { ...customConfig, method: 'GET' })
}

Client.post = function (endpoint, body, customConfig = {}) {
  return Client(endpoint, { ...customConfig, method: 'POST', body })
}

Client.put = function (endpoint, body, customConfig = {}) {
  return Client(endpoint, { ...customConfig, method: 'PUT', body })
}

Client.patch = function (endpoint, body, customConfig = {}) {
  return Client(endpoint, { ...customConfig, method: 'PATCH', body })
}

Client.delete = function (endpoint, body, customConfig = {}) {
  return Client(endpoint, { ...customConfig, method: 'DELETE', body })
}
