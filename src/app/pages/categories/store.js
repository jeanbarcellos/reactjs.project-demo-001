import { combineReducers } from '@reduxjs/toolkit'
import categoriesSlice from './categoriesSlice'

const reducers = combineReducers({
  categories: categoriesSlice
})

export default reducers
