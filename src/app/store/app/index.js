import { combineReducers } from '@reduxjs/toolkit'
import navbarSlice from './navbarSlice'

// Aqui serão adicionados os reducers referentes ao sistema em geral
const appReducers = combineReducers({
  navbar: navbarSlice
})

export default appReducers
