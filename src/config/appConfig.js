/**
 * Informações gerais do applicativo
 */
const appConfig = {
  // Nome do APP
  name: process.env.REACT_APP_NAME || 'ReactJS - Projeto Demo - @jeanbarcellos',

  authentication: {
    enabled: true
  },

  authorization: {
    enabled: true
  }
}

export default appConfig
