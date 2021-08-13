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
    },
    categoryUpdated(state, action) {
      const { id, name } = action.payload

      const existingCategory = state.entities.find(category => category.id === id)

      if (existingCategory) {
        existingCategory.name = name
        existingCategory.updatedAt = new Date().toISOString()
      }
    },
    categoryDeleted(state, action) {
      const { id } = action.payload

      const index = state.entities.findIndex(category => category.id === id)
      state.entities.splice(index, 1)
    }
  }
})

export const { categoryAdded, categoryUpdated, categoryDeleted } = categoriesSlice.actions

export default categoriesSlice.reducer
