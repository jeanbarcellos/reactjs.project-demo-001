import _ from 'lodash'

const RoleModel = data => {
  const item = data || {}

  return _.defaults(data, {
    id: item.id || null,
    name: item.name || '',
    description: item.description || '',
    childRoles: item.childRoles ? item.childRoles.map(role => role.id) : [],
    createdAt: item.createdAt || null,
    updatedAt: item.updatedAt || null
  })
}
export default RoleModel
