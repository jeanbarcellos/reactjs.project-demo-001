import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import appReducers from './app'
import logger from './middlewares/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

// Reducers iniciais

const staticReducers = {
  app: appReducers
}

const createReducer = asyncReducers => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

const middlewares = [thunkMiddleware, logger]

const enhancers = [monitorReducerEnhancer]

// store

const store = configureStore({
  reducer: createReducer(),
  middleware: middlewares,
  enhancers: enhancers,
  devTools: process.env.NODE_ENV === 'development'
})

// Reducers assincronos

store.asyncReducers = {}

export const injectReducer = (key, asyncReducer) => {
  if (store.asyncReducers[key]) {
    return false
  }

  store.asyncReducers[key] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
  return store
}

export default store
