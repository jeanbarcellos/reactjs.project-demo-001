import { combineReducers } from '@reduxjs/toolkit'
import categoriesSlice from './categoriesSlice'

export const reducerKey = 'categories'

const reducers = combineReducers({
  categories: categoriesSlice
})

export default reducers
