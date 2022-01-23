import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from '../config'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'
import * as Api from 'api/categoriesApi'

const reducerKey = `categories`
const reducerName = `${config.moduleKey}/${reducerKey}`

const categoriesAdapter = createEntityAdapter()

// #region Initial State

const initialState = categoriesAdapter.getInitialState({})

// #endregion

// #region Thunk functions

export const getCategories = createAsyncThunk(`${reducerName}/getCategories`, async (args, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.getCategories()

    dispatch(showSuccessMessage('Catetories loaded successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error loading categories!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const insertCategory = createAsyncThunk(`${reducerName}/insertCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.insertCategory(category)

    dispatch(showSuccessMessage('Category added successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error adding category!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const updateCategory = createAsyncThunk(`${reducerName}/updateCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.updateCategory(category)

    dispatch(showSuccessMessage('Category edited successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error editing category!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const deleteCategory = createAsyncThunk(`${reducerName}/deleteCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    await Api.deleteCategory(category.id)

    dispatch(showSuccessMessage('Category deleted successfully!'))

    return category.id
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error deleting category!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

// #endregion

// #region Reducer

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    resetCategories(state, action) {
      categoriesAdapter.removeAll(state)
    }
  },
  extraReducers: {
    [getCategories.fulfilled]: categoriesAdapter.setAll,
    [insertCategory.fulfilled]: categoriesAdapter.addOne,
    [updateCategory.fulfilled]: categoriesAdapter.upsertOne,
    [deleteCategory.fulfilled]: categoriesAdapter.removeOne
  }
})

// #endregion

// #region Actions

export const { resetCategories } = categoriesSlice.actions

// #endregion

// #region  Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.moduleKey][reducerKey]
)

// #endregion

export default categoriesSlice.reducer
