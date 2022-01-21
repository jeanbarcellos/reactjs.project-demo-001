import { styled } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import layoutConfig from 'config/layoutConfig'

const Root = styled('div')(({ theme, config }) => ({
  position: 'fixed',
  width: `calc(100% - ${layoutConfig.drawer.width}px)`,
  height: `${layoutConfig.footer.height}px`,
  background: '#FFFFFF',
  bottom: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  textAlign: 'center',
  padding: '5px'
}))

const Footer = props => {
  return (
    <Root id={props.id}>
      <Typography variant='body1' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://jeanbarcellos.com.br/'>
          Jean Barcellos
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Root>
  )
}

export default Footer
