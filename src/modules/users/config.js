import Roles from 'services/auth/Roles'
import { layoutPrivate } from 'utils/layout'
import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'usersModule',

  layout: layoutPrivate(),

  routes: routes,

  auth: true,

  role: Roles.ROOT
}

export default config
