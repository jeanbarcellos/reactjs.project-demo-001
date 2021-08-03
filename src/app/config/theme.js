import { createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    type: 'light'
  },
  status: {
    danger: orange[500]
  }
})

export default theme
