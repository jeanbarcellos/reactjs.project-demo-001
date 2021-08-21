import { errorObject, successObject } from './utils'

const clientFetch = async (endpoint, body = null, customConfig = {}) => {
  const localConfig = {
    ...customConfig,
    body: body ? JSON.stringify(body) : null
  }

  let data
  try {
    const response = await window.fetch(endpoint, localConfig)
    const data = await response.json()
    if (response.ok) {
      return successObject(response.status, data, response.headers)
    }

    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(errorObject(500, err.message || 'Error'))
  }
}

export default clientFetch
