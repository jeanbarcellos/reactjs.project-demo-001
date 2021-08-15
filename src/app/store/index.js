import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducers from './app'
import logger from './middlewares/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

// Defina os Redutores que sempre estarão presentes na aplicação
const staticReducers = {
  app: appReducers
}

const createReducer = asyncReducers => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

const middlewares = [logger]

const enhancers = [monitorReducerEnhancer]

export function initializeStore(initialState) {
  const store = configureStore({
    reducer: createReducer(),
    middleware: middlewares,
    enhancers: enhancers,
    devTools: process.env.NODE_ENV === 'development'
  })

  // Adicione um dicionário para acompanhar os redutores assíncronos registrados
  store.asyncReducers = {}

  // Esta função adiciona o redutor assíncrono e cria um novo redutor combinado
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Devolver a loja modificada
  return store
}

export default initializeStore({})
