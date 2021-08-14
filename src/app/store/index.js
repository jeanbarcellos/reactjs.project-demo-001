import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducer'

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === 'development'
})

export default store
