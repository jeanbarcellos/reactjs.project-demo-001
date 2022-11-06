import history from '@history'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import jwtService from 'services/jwt/JwtService'

const reducerKey = `user`
const reducerName = `app/auth/${reducerKey}`

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

export const logoutUser = () => async (dispatch, getState) => {
  jwtService.logout()

  history.push('/')

  return dispatch(resetUser())
}

// Selectors

export const selectUser = state => state.app.auth.user.data

export const selectUserRoles = state => state.app.auth.user.data?.roles || []

export const selectUserToken = state => state.app.auth.user.data?.token

export const selectIsAuthenticated = createSelector([selectUser], user => user !== null)

// Reducer

export default userSlice.reducer
