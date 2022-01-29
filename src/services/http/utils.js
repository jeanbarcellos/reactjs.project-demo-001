export const successObject = (code, data, headers) => {
  return {
    success: true,
    code: code || 200,
    headers: headers || null,
    // ...
    data: data || null,
    message: data.message || null
  }
}

export const errorObject = (code, message, errors, headers) => {
  return {
    success: false,
    code: code || 400,
    headers: headers || null,
    // ...
    message: message || null,
    errors: errors || []
  }
}

export const mock = (success, seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve()
      } else {
        reject({ message: 'Error' })
      }
    }, seconds * timeout)
  })
}

export const mockResponseSuccess = (data, code = 200) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(successObject(code, data))
    }, 5000)
  })
}

export const mockResponseError = (code = 400, message = null, errors = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(errorObject(code, message, errors))
    }, 5000)
  })
}
