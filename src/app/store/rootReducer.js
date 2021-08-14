import { combineReducers } from 'redux'
import counterReducer from 'app/pages/counter/counterSlice'
import categoriesSlice from 'app/pages/categories/categoriesSlice'

const rootReducers = combineReducers({
  counter: counterReducer,
  categories: categoriesSlice
})

export default rootReducers
