import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/navbar'

const initialState = {
  open: true
}

const navbarSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    navbarOpen: (state, action) => {
      state.open = true
    },
    navbarClose: (state, action) => {
      state.open = false
    },
    navbarToggle: (state, action) => {
      state.open = !state.open
    }
  }
})

export const selectNavbarOpen = state => state.app.navbar.open

export const { navbarOpen, navbarClose, navbarToggle } = navbarSlice.actions

export default navbarSlice.reducer
