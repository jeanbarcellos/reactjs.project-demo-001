import Roles from 'services/auth/Roles'
import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'rolesModule',

  layout: {},

  routes: routes,

  auth: true,

  role: Roles.ROOT
}

export default config
