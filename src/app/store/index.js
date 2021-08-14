import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducer'

const store = configureStore({
  reducer: rootReducers,
  middleware: [],
  enhancers: [],
  devTools: process.env.NODE_ENV === 'development'
})

export default store
