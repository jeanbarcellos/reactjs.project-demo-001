import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/navbar'

const initialState = {
  open: true
}

const navbarSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    openedNavbar: (state, action) => {
      state.open = true
    },
    closedNavbar: (state, action) => {
      state.open = false
    },
    toggledNavbar: (state, action) => {
      state.open = !state.open
    }
  }
})

export const selectNavbarOpen = state => state.app.navbar.open

export const { openedNavbar, closedNavbar, toggledNavbar } = navbarSlice.actions

export default navbarSlice.reducer
