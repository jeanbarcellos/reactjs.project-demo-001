import { combineReducers } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'

const reducers = combineReducers({
  login: loginSlice
})

export default reducers
