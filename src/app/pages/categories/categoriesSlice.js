import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import Utils from 'core/utils'
import config from './config'
import { Client } from 'core/Http/Client'

const reducerName = `${config.reducerKey}/categories`

const categoriesAdapter = createEntityAdapter()

// Initial State

const initialState = categoriesAdapter.getInitialState({})

// Thunk functions

export const fetchCategories = createAsyncThunk(`${reducerName}/fetchCategories`, async () => {
  const response = await Client.get(`/categories`)
  return response
})

export const insertCategory = createAsyncThunk(`${reducerName}/insertCategory`, async (category, { dispatch }) => {
  const response = await Client.post(`/categories`, category)
  return response
})

export const updateCategory = createAsyncThunk(`${reducerName}/updateCategory`, async (category, { dispatch }) => {
  const response = await Client.put(`/categories/${category.id}`, category)
  return response
})

export const deleteCategory = createAsyncThunk(`${reducerName}/deleteCategory`, async (category, { dispatch }) => {
  await Client.delete(`/categories/${category.id}`)
  return category.id
})

// Reducer

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    resetCategories(state, action) {
      categoriesAdapter.removeAll(state)
    },
    categoryAdded(state, action) {
      const date = new Date().toISOString()
      const entity = {
        ...action.payload,
        id: Utils.generateID(),
        createdAt: date,
        updatedAt: date
      }

      categoriesAdapter.addOne(state, entity)
    },
    categoryUpdated(state, action) {
      const entity = {
        ...action.payload,
        updatedAt: new Date().toISOString()
      }

      categoriesAdapter.upsertOne(state, entity)
    },
    categoryDeleted(state, action) {
      const { id } = action.payload

      categoriesAdapter.removeOne(state, id)
    }
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {},
    [fetchCategories.fulfilled]: categoriesAdapter.setAll,
    [insertCategory.rejected]: (state, action) => {},
    [insertCategory.fulfilled]: categoriesAdapter.addOne,
    [updateCategory.rejected]: (state, action) => {},
    [updateCategory.fulfilled]: categoriesAdapter.upsertOne,
    [deleteCategory.rejected]: (state, action) => {},
    [deleteCategory.fulfilled]: categoriesAdapter.removeOne
  }
})

// Actions

export const { resetCategories } = categoriesSlice.actions

// Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.reducerKey].categories
)

export default categoriesSlice.reducer
