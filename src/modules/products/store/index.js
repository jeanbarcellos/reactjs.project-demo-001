import { combineReducers } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'

const reducers = combineReducers({
  products: productsSlice
})

export default reducers
