import { isArray, isString } from 'utils'
import _ from 'lodash'

export const createArrayRoles = role => {
  let roles = []
  if (isString(role)) {
    roles.push(role)
  }
  if (isArray(role)) {
    _.merge(roles, role)
  }
  return roles
}

export const hasPermission = (allowedRoles, userRoles = []) => {
  if (createArrayRoles(allowedRoles).some(el => userRoles.includes(el))) {
    return true
  }

  return false
}
