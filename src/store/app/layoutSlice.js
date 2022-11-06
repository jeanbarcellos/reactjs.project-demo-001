import { createSlice } from '@reduxjs/toolkit'
import layoutConfig from 'config/layoutConfig'
import _ from 'lodash'

const reducerKey = `layout`
const reducerName = `app/${reducerKey}`

// Initial state

const initialState = {
  default: { ...layoutConfig },
  current: { ...layoutConfig }
}

// Slice

const layoutSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setLayout: (state, action) => {
      const current = generateLayout(action.payload)
      return {
        ...state,
        current
      }
    }
  },
  extraReducers: {}
})

// Actions

export const { setLayout } = layoutSlice.actions

// Selectors

export const selectLayoutDefaultConfig = state => state.app[reducerKey].default

export const selectLayoutConfig = state => state.app[reducerKey].current

// Functions

export const generateLayout = newLayout => {
  return _.merge({}, layoutConfig, newLayout)
}

// Reducer

export default layoutSlice.reducer
