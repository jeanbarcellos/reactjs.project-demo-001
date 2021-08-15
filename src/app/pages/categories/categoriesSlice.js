import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import Utils from 'core/utils'
import config from './config'
import categoriesDb from 'app/@fake-db/categoriesDb'

const reducerName = `${config.reducerKey}/categories`

const categoriesAdapter = createEntityAdapter()

// Initial State

const initialState = categoriesAdapter.getInitialState({})

// Thunk functions

export const fetchCategories = createAsyncThunk(`${reducerName}/fetchCategories`, async () => {
  // Lógica e buscar no banco de dados ..

  return categoriesDb.categories
})

// Reducer

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
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
    [fetchCategories.fulfilled]: categoriesAdapter.setAll
  }
})

// Actions

export const { categoryAdded, categoryUpdated, categoryDeleted } = categoriesSlice.actions

// Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.reducerKey].categories
)

export default categoriesSlice.reducer
