import React from 'react'
import CheckBox from '@material-ui/core/CheckBox'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger
    }
  },
  line: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  checked: {}
}))

const ThemeDemo = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.line}>
        <CheckBox
          defaultChecked
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
      </div>
      <div className={classes.line}>
        <Button variant='contained'>Default</Button>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' disabled>
          Disabled
        </Button>
        <Button variant='contained' color='primary' href='#contained-buttons'>
          Link
        </Button>
      </div>
      <div className={classes.line}>
        <Button variant='outlined'>Default</Button>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' disabled>
          Disabled
        </Button>
        <Button variant='outlined' color='primary' href='#outlined-buttons'>
          Link
        </Button>
      </div>
    </div>
  )
}

export default ThemeDemo
