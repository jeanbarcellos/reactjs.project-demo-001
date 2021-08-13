import { createSlice } from '@reduxjs/toolkit'
import categoriesDb from 'app/@fake-db/categoriesDb'

const reducerName = 'categories/categories'

const initialState = {
  entities: categoriesDb.categories
}

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {}
})

export default categoriesSlice.reducer
