import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Icon from '@material-ui/core/Icon'
import layoutConfig from 'app/config/layoutConfig'
import navigationConfig from 'app/config/navigationConfig'
import Logo from './Logo'

export const navSavedReports = [
  {
    id: 6,
    icon: 'assignment',
    text: 'Current month'
  },
  {
    id: 7,
    icon: 'assignment',
    text: 'Last quarter'
  },
  {
    id: 8,
    icon: 'assignment',
    text: 'Year-end sale'
  }
]

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: layoutConfig.toolbar.paddingRight
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: layoutConfig.drawer.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}))

const Navigation = props => {
  const { open, handleDrawerClose } = props

  const classes = useStyles()

  return (
    <Drawer
      id={props.id}
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className='flex justify-between'>
        <Logo className='h-48 mt-4 ml-8' />

        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <List>
        {navigationConfig.map(item => (
          <ListItem button key={item.id} component={Link} to={item.url}>
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

Navigation.defaultProps = {
  open: true,
  handleDrawerClose: () => {}
}

export default Navigation
