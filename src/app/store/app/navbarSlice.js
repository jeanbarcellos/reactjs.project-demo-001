import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/navbar'

const initialState = {
  open: true
}

const navbarSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    navbarOpened: (state, action) => {
      state.open = true
    },
    navbarClosed: (state, action) => {
      state.open = false
    },
    navbarToggled: (state, action) => {
      state.open = !state.open
    }
  }
})

export const selectNavbarOpen = state => state.app.navbar.open

export const { navbarOpened, navbarClosed, navbarToggled } = navbarSlice.actions

export default navbarSlice.reducer
