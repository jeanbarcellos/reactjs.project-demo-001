import { createSlice } from '@reduxjs/toolkit'
import config from '../config'

const reducerKey = `login`
const reducerName = `${config.moduleKey}/${reducerKey}`

const initialState = {}

const loginSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {}
})

export default loginSlice.reducer
