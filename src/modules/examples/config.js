import { layoutPrivate } from 'utils/layout'
import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'exampleModule',

  layout: layoutPrivate(),

  routes: routes,

  auth: false
}

export default config
