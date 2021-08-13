import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../pages/counter/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
