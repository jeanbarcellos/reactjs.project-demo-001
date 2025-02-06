import { styled } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { selectLayoutConfig } from 'store/app/layoutSlice'

const Root = styled('div')(({ theme, config }) => ({
  position: 'fixed',
  // width: `calc(100% - ${layoutConfig.drawer.width}px)`,
  width: `100%`,
  height: `${config.footer.height}px`,
  background: '#FFFFFF',
  bottom: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  textAlign: 'center',
  padding: '5px'
}))

const Footer = props => {
  const layoutConfig = useSelector(selectLayoutConfig)

  return (
    <Root id={props.id} config={layoutConfig}>
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
