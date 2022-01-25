import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const reducers = combineReducers({
  user: userSlice
})

export default reducers
