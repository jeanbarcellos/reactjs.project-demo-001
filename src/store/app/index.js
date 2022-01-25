import { combineReducers } from '@reduxjs/toolkit'
import navbarSlice from './navbarSlice'
import dialogSlice from './dialogSlice'
import messageSlice from './messageSlice'
import auth from './auth'

// Aqui serão adicionados os reducers referentes ao sistema em geral
const appReducers = combineReducers({
  navbar: navbarSlice,
  dialog: dialogSlice,
  message: messageSlice,
  auth
})

export default appReducers
