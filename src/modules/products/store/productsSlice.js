import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from '../config'
import * as Api from 'api/productsApi'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'

const reducerKey = `products`
const reducerName = `${config.moduleKey}/${reducerKey}`

const productsAdapter = createEntityAdapter()

// #region Initial State

const initialState = productsAdapter.getInitialState({})

// #endregion

// #region Thunk Functions

export const getProducts = createAsyncThunk(`${reducerName}/getProducts`, async (args, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.getProducts()

    dispatch(showSuccessMessage('Products loaded successfully!!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error loading products!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const insertProduct = createAsyncThunk(`${reducerName}/insertProduct`, async (product, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.insertProduct(product)

    dispatch(showSuccessMessage('Product added successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error adding product!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const updateProduct = createAsyncThunk(`${reducerName}/updateProduct`, async (product, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.updateProduct(product)

    dispatch(showSuccessMessage('Product edited successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error editing product!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

// #endregion

// #region Slice

const productsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    resetProducts(state, action) {
      productsAdapter.removeAll(state)
    }
  },
  extraReducers: {
    [getProducts.fulfilled]: productsAdapter.setAll,
    [insertProduct.fulfilled]: productsAdapter.addOne,
    [updateProduct.fulfilled]: productsAdapter.upsertOne
  }
})

// #endregion

// #region Actions

export const { resetProducts } = productsSlice.actions

// #endregion

// #region Selectors

export const { selectAll: selectAllProducts } = productsAdapter.getSelectors(
  state => state[config.moduleKey][reducerKey]
)

// #endregion

export default productsSlice.reducer
