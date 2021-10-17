const apiConfig = {
  // URL base
  baseUrl: process.env.REACT_APP_API_URL,

  // Cabeçalhos padrão das requisições
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

export default apiConfig
