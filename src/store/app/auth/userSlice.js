import { createSelector, createSlice } from '@reduxjs/toolkit'

const reducerName = `app/auth/user`

// Initial State

const initialState = {
  data: null
  // data: {
  //   id: null,
  //   displayName: 'Anônimo'
  // }
}

// Slice

const userSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    resetUser: (state, action) => initialState,
    setUser: (state, action) => {
      state.data = action.payload
    }
  },
  extraReducers: {}
})

// Actions

export const { resetUser, setUser } = userSlice.actions

// Selectors

export const selectUser = state => state.app.auth.user.data

export const selectUserRoles = state => state.app.auth.user.data?.roles || []

export const selectUserToken = state => state.app.auth.user.data?.token

export const selectIsAuthenticated = createSelector([selectUser], user => user !== null)

// Reducer

export default userSlice.reducer
