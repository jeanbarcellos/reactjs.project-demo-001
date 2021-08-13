import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'app/pages/counter/counterSlice'
import categoriesSlice from 'app/pages/categories/categoriesSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesSlice
  }
})

export default store
