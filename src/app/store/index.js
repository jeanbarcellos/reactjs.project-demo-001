import { createStore } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'

import appReducers from './app'

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

export function configureStore(initialState) {
  const store = createStore(createReducer(), initialState)

  // Adicione um dicionário para acompanhar os redutores assíncronos registrados
  store.asyncReducers = {}

  // Crie uma função de redutor de injeção
  // Esta função adiciona o redutor assíncrono e cria um novo redutor combinado
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Devolver a loja modificada
  return store
}

export default configureStore({})
