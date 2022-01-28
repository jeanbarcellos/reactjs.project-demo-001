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

// actions

export const { setLayout } = layoutSlice.actions

// Selectors

export const selectLayoutDefaultConfig = state => state.app[reducerKey].default

export const selectLayoutConfig = state => state.app[reducerKey].current

// functions

export const generateLayout = newLayout => {
  return _.merge({}, layoutConfig, newLayout)
}

export default layoutSlice.reducer
