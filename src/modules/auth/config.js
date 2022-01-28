import { layoutPublic } from 'utils/layout'
import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'authModule',

  layout: layoutPublic(),

  routes: routes
}

export default config
