import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import navigationConfig from 'config/navigationConfig'
import { isBoolean } from 'utils'
import { createArrayRoles, hasAuth } from 'utils/security'
import { selectIsAuthenticated, selectUserRoles } from './auth/userSlice'

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

export const selectNavigation = createSelector(
  [selectNavigationAll, selectIsAuthenticated, selectUserRoles],
  (navigation, auth, userRoles) => getNavigation(navigation, auth, userRoles)
)

// #endregion

// #region functions

const getNavigation = (navItems = [], userAuthenticated = false, userRoles = []) =>
  navItems
    .map(navItem => createNavItem(navItem))
    .filter(navItemMap => showNavItemPermission(navItemMap, userAuthenticated, userRoles))

const createNavItem = navItem => {
  return {
    id: navItem.id,
    text: navItem.text,
    icon: navItem.icon || null,
    url: navItem.url || null,
    auth: isBoolean(navItem.auth) ? navItem.auth : true,
    role: createArrayRoles(navItem.role)
  }
}

const showNavItemPermission = (navItem, userAuthenticated = false, userRoles = []) =>
  hasAuth(navItem.auth, navItem.role, userAuthenticated, userRoles)

// #endregion

export default navigationSlice.reducer
