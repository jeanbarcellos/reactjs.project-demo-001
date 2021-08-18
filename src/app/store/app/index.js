import { combineReducers } from '@reduxjs/toolkit'
import navbarSlice from './navbarSlice'
import dialogSlice from './dialogSlice'

// Aqui serão adicionados os reducers referentes ao sistema em geral
const appReducers = combineReducers({
  navbar: navbarSlice,
  dialog: dialogSlice
})

export default appReducers
