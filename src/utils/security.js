import { isArray, isBoolean, isString } from 'utils'
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

// Verifiar somente autorização
export const hasPermission = (allowedRoles, userRoles = []) => {
  if (createArrayRoles(allowedRoles).some(el => userRoles.includes(el))) {
    return true
  }

  return false
}

// Verificar autenticação e autorização
export const hasAuth = (itemAuth = true, itemRole = [], userIsAuthenticated = false, userRoles = []) => {
  var _itemAuth = isBoolean(itemAuth) ? itemAuth : true
  var _itemRole = createArrayRoles(itemRole)

  // Item não precisa de autenticação
  if (!_itemAuth) {
    return true
  }

  // Precisa de autenticação e não está autenticado
  if (_itemAuth && !userIsAuthenticated) {
    return false
  }

  // Item não precisa de permissões
  if (_itemRole.length === 0) {
    return true
  }

  return hasPermission(_itemRole, userRoles)
}
