// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

import clientAxios from './clientAxios'
import apiConfig from 'config/apiConfig'

export async function client(endpoint, { body, ...customConfig } = {}) {
  const path = apiConfig.baseUrl + endpoint

  const requestConfig = {
    ...customConfig,
    headers: {
      ...apiConfig.headers,
      ...customConfig.headers
    }
  }

  return clientAxios(path, body, requestConfig)

  // ***************************************************************************
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'POST', body })
}

client.put = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'PUT', body })
}

client.patch = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'PATCH', body })
}

client.delete = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'DELETE', body })
}
