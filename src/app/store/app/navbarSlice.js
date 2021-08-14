import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/navbar'

const initialState = {
  open: true
}

const navbarSlice = createSlice({
  name: reducerName,
  initialState: initialState
})

export default navbarSlice.reducer
