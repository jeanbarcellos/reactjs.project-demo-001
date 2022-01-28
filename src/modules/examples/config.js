import { layoutPublic } from 'utils/layout'
import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'exampleModule',

  layout: layoutPublic(),

  routes: routes
}

export default config
