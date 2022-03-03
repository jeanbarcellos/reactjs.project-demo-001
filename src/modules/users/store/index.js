import { combineReducers } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'

const reducers = combineReducers({
  users: usersSlice
})

export default reducers
