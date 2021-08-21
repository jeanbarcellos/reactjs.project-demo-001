import _ from 'lodash'

const CategoryModel = data => {
  const item = data || {}

  return _.defaults(data, {
    id: item.id || null,
    name: item.name || '',
    createdAt: item.createdAt || null,
    updatedAt: item.updatedAt || null
  })
}
export default CategoryModel
