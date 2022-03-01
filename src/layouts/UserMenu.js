import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { loginRoute } from 'modules/auth/routes'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser, selectUser } from 'store/app/auth/userSlice'

const UserMenu = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [userMenu, setUserMenu] = useState(null)

  const userMenuClick = event => {
    setUserMenu(event.currentTarget)
  }

  const userMenuClose = () => {
    setUserMenu(null)
  }

  return (
    user && (
      <>
        <Button className='min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6' onClick={userMenuClick} color='inherit'>
          <div className='hidden md:flex flex-col mx-4 items-end'>
            <Typography component='span' className='font-semibold flex'>
              {user?.name || 'Anônimo'}
            </Typography>
            <Typography className='text-11 font-medium lowercase' color='textSecondary'>
              {user?.email || 'anonimo@hotmail.com'}
            </Typography>
          </div>

          <Avatar className='md:mx-4'>{user?.name ? user.name[0] : 'A'}</Avatar>
        </Button>

        <Popover
          open={Boolean(userMenu)}
          anchorEl={userMenu}
          onClose={userMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          classes={{
            paper: 'py-8'
          }}
        >
          {!user ? (
            <>
              <MenuItem component={Link} to={loginRoute()} role='button'>
                <ListItemIcon className='min-w-40'>
                  <Icon>lock</Icon>
                </ListItemIcon>
                <ListItemText primary='Login' />
              </MenuItem>
              <MenuItem component={Link} to='/register' role='button'>
                <ListItemIcon className='min-w-40'>
                  <Icon>person_add</Icon>
                </ListItemIcon>
                <ListItemText primary='Registrar-se' />
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem component={Link} to='/' onClick={userMenuClose} role='button'>
                <ListItemIcon className='min-w-40'>
                  <Icon>account_circle</Icon>
                </ListItemIcon>
                <ListItemText primary='Meu perfil' />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(logoutUser())
                  userMenuClose()
                }}
              >
                <ListItemIcon className='min-w-40'>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </MenuItem>
            </>
          )}
        </Popover>
      </>
    )
  )
}

export default UserMenu
