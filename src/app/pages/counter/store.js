import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

export const reducerKey = 'counter'

const reducers = combineReducers({
  counter: counterSlice
})

export default reducers
