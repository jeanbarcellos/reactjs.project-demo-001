import { combineReducers } from '@reduxjs/toolkit'
import rolesSlice from './rolesSlice'

const reducers = combineReducers({
  roles: rolesSlice
})

export default reducers
