import { createMuiTheme } from '@material-ui/core/styles'
import { prymaryColors, secondaryColors } from './colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: prymaryColors,
      contrastText: "#000000"
    },
    secondary: {
      main: secondaryColors,
      contrastText: "#000000"
    },
    text: {
      primary: "#000000"
    }
  }
});

export default theme