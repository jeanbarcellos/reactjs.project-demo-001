import { createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const themeConfig = createTheme({
  palette: {
    type: 'light'
  },
  status: {
    danger: orange[500]
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    body1: {
      fontSize: '1.3rem'
    },
    body2: {
      fontSize: '1.3rem'
    }
  }
})

export default themeConfig
