import { createSlice } from '@reduxjs/toolkit'
import layoutConfig from 'config/layoutConfig'

const reducerKey = `layout`
const reducerName = `app/${reducerKey}`

const initialState = {
  ...layoutConfig
}

const layoutSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {}
})

export const selectLayoutConfig = state => state.app[reducerKey]

export default layoutSlice.reducer
