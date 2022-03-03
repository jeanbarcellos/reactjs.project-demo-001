import { createSlice } from '@reduxjs/toolkit'
import config from '../config'

const reducerKey = `users`
const reducerName = `${config.moduleKey}/${reducerKey}`

// #region Initial State

const initialState = {}

// #endregion

// #region Thunk functions

// #endregion

// #region Reducer

const usersSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {},
  extraReducers: {}
})

// #endregion

// #region Actions

// #endregion

// #region  Selectors

// #endregion

export default usersSlice.reducer
