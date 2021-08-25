import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from '../config'

const reducerName = `${config.reducerKey}/products`

const productsAdapter = createEntityAdapter()

const initialState = productsAdapter.getInitialState({})

const productsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {}
})

export default productsSlice.reducer
