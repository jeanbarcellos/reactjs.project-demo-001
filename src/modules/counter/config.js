import { layoutPublic } from 'utils/layout'
import routes from './routes'

const config = {
  // Chave padrão
  reducerKey: 'counterModule',

  layout: layoutPublic(),

  routes: routes
}

export default config
