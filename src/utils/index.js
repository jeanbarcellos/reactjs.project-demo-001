export const isArray = value => {
  return Array.isArray(value)
}

export const isTypeUndefined = value => {
  return typeof value === 'undefined'
}

export const isDate = value => {
  return value instanceof Date
}

export const isFunction = value => {
  return value !== null && typeof value === 'function'
}

export const isObject = value => {
  return value !== null && typeof value === 'object'
}

export const isString = value => {
  return typeof value === 'string'
}

export const isNumber = value => {
  return typeof value === 'number'
}

export const isBoolean = value => {
  return typeof value == 'boolean'
}

export const isRegex = value => {
  return value instanceof RegExp
}

export const isValueStringEmpty = value => {
  return value === ''
}

export const isValueUndefined = value => {
  return value === undefined
}

export const isValueNullOrUndefined = value => {
  return value === null || value === undefined
}

export const isExisty = value => {
  return !isValueNullOrUndefined(value)
}

export const isEmpty = value => {
  if (isString(value)) {
    return isValueStringEmpty(value)
  }

  if (isArray(value)) {
    return value.length === 0
  }

  if (isTypeUndefined(value)) {
    return false
  }

  return isValueUndefined(value)
}

export const isEmptyOrNull = value => {
  if (value === null) {
    return true
  }

  return isEmpty(value)
}

export const isDefaultRequiredValue = value => {
  return isString(value) ? isValueStringEmpty(value) : isValueNullOrUndefined(value)
}
