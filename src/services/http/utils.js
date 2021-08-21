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
