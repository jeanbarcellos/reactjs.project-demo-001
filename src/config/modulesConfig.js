import authConfig from 'modules/auth/config'
import categoriesConfig from 'modules/categories/config'
import counterConfig from 'modules/counter/config'
import dashboardConfig from 'modules/dashboard/config'
import errorsConfig from 'modules/errors/config'
import examplesConfig from 'modules/examples/config'
import productsConfig from 'modules/products/config'
import rolesConfig from 'modules/roles/config'
import usersConfig from 'modules/users/config'

const modulesConfig = [
  authConfig,
  rolesConfig,
  usersConfig,
  dashboardConfig,
  categoriesConfig,
  productsConfig,
  counterConfig,
  errorsConfig,
  examplesConfig
]

export default modulesConfig
