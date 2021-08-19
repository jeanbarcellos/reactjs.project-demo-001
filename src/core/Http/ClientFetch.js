const ClientFetch = async (endpoint, body = null, customConfig = {}) => {
  const localConfig = {
    ...customConfig,
    body: body ? JSON.stringify(body) : null
  }

  let data
  try {
    const response = await window.fetch(endpoint, localConfig)
    const data = await response.json()
    if (response.ok) {
      return {
        success: true,
        code: response.status,
        headers: response.headers,
        data,
        message: data.message || null
      }
    }

    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

export default ClientFetch
