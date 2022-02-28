import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import navigationConfig from 'config/navigationConfig'
import _ from 'lodash'
import { isArray, isBoolean, isString } from 'utils'

const reducerKey = `navigation`
const reducerName = `app/${reducerKey}`

const navigationAdapter = createEntityAdapter()

// #region Initial State

const emptyInitialState = navigationAdapter.getInitialState()
const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig)

// #endregion

// #region Slice

const navigationSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setNavigation: navigationAdapter.setAll,
    resetNavigation: (state, action) => initialState
  },
  extraReducers: {}
})

// #endregion

// #region actions

export const { setNavigation, resetNavigation } = navigationSlice.actions

// #endregion

// #region Selectors

export const { selectAll: selectNavigationAll } = navigationAdapter.getSelectors(state => state.app[reducerKey])

export const selectNavigation = createSelector([selectNavigationAll], navigation => {
  return getNavigation(selectNavigationAll)
})

// #endregion

// #region functions

const getNavigation = () => {
  const navigation = []

  for (let i = 0; i < navigationConfig.length; i += 1) {
    const navItem = navigationConfig[i]
    navigation.push(createNavItem(navItem))
  }

  return navigation
}

const createNavItem = navItem => {
  return {
    id: navItem.id,
    text: navItem.text,
    icon: navItem.icon || null,
    url: navItem.url || null,
    auth: isBoolean(navItem.auth) ? navItem.auth : true,
    role: createRolesNavItem(navItem.role)
  }
}

const createRolesNavItem = role => {
  let roles = []
  if (isString(role)) {
    roles.push(role)
  }
  if (isArray(role)) {
    _.merge(roles, role)
  }
  return roles
}

// #endregion

export default navigationSlice.reducer
