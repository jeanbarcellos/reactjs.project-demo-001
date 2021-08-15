import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import Utils from 'core/utils'
import config from './config'

const reducerName = `${config.reducerKey}/categories`

const categoriesAdapter = createEntityAdapter()

// Initial State
const initialState = categoriesAdapter.getInitialState({})

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
  }
})

// Actions
export const { categoryAdded, categoryUpdated, categoryDeleted } = categoriesSlice.actions

// Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.reducerKey].categories
)

export default categoriesSlice.reducer
