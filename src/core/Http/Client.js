// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function Client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
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
