import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const reducers = combineReducers({
  counter: counterSlice
})

export default reducers
