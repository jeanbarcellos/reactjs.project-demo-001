import routes from './routes'

const config = {
  // Chave padrão
  moduleKey: 'authModule',

  layout: {
    toolbar: {
      display: true
    },

    navbar: {
      display: true
    },

    footer: {
      display: true
    }
  },

  routes: routes
}

export default config
