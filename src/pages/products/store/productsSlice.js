import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from '../config'
import * as Api from 'api/productsApi'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'

const reducerName = `${config.reducerKey}/products`

const productsAdapter = createEntityAdapter()

const initialState = productsAdapter.getInitialState({})

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

export const { resetProducts } = productsSlice.actions

export const { selectAll: selectAllProducts } = productsAdapter.getSelectors(state => state[config.reducerKey].products)

export default productsSlice.reducer
