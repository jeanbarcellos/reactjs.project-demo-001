import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'
import layoutConfig from 'app/config/layoutConfig'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: `calc(100% - ${layoutConfig.drawer.width}px)`,
    // height: '40px',
    background: '#FFFFFF',
    bottom: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    padding: '5px',
    height: `${layoutConfig.footer.height}px`
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='body1' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://jeanbarcellos.com.br/'>
          Jean Barcellos
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  )
}
export default Footer
