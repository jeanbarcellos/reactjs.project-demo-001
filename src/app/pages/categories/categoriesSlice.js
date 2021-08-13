import { createSlice } from '@reduxjs/toolkit'
import categoriesDb from 'app/@fake-db/categoriesDb'

const reducerName = 'categories/categories'

const initialState = {
  entities: categoriesDb.categories
}

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    categoryAdded(state, action) {
      state.entities.push(action.payload)
    }
  }
})

export const { categoryAdded } = categoriesSlice.actions

export default categoriesSlice.reducer
