import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import * as Api from 'api/rolesApi'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'
import config from '../config'

const reducerKey = `roles`
const reducerName = `${config.moduleKey}/${reducerKey}`

const rolesAdapter = createEntityAdapter()

// #region Initial State

const initialState = rolesAdapter.getInitialState({})

// #endregion

// #region Thunk functions

export const getRoles = createAsyncThunk(`${reducerName}/getRoles`, async (args, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.getRoles()

    dispatch(showSuccessMessage('Roles loaded successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error loading roles!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const insertRole = createAsyncThunk(`${reducerName}/insertRole`, async (role, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.insertRole(role)

    dispatch(showSuccessMessage('Role added successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error adding role!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const updateRole = createAsyncThunk(`${reducerName}/updateRole`, async (role, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.updateRole(role)

    dispatch(showSuccessMessage('Role edited successfully!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error editing role!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const deleteRole = createAsyncThunk(`${reducerName}/deleteRole`, async (role, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    await Api.deleteRole(role.id)

    dispatch(showSuccessMessage('Role deleted successfully!'))

    return role.id
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Error deleting role!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

// #endregion

// #region Reducer

const rolesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    resetRoles(state, action) {
      rolesAdapter.removeAll(state)
    }
  },
  extraReducers: {
    [getRoles.fulfilled]: rolesAdapter.setAll,
    [insertRole.fulfilled]: rolesAdapter.addOne,
    [updateRole.fulfilled]: rolesAdapter.upsertOne,
    [deleteRole.fulfilled]: rolesAdapter.removeOne
  }
})

// #endregion

// #region Actions

export const { resetRoles } = rolesSlice.actions

// #endregion

// #region  Selectors

export const { selectAll: selectAllRoles } = rolesAdapter.getSelectors(state => state[config.moduleKey][reducerKey])

// #endregion

export default rolesSlice.reducer
