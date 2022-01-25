import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import dialogSlice from './dialogSlice'
import layoutSlice from './layoutSlice'
import messageSlice from './messageSlice'
import navbarSlice from './navbarSlice'

// Aqui serão adicionados os reducers referentes ao sistema em geral
const appReducers = combineReducers({
  navbar: navbarSlice,
  dialog: dialogSlice,
  message: messageSlice,
  layout: layoutSlice,
  auth
})

export default appReducers
