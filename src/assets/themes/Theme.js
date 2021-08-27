import { createTheme } from '@material-ui/core/styles';
import {Colors} from './Colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.pastelBlue,
    },
    secondary: {
      main: Colors.pastelOrange,
    },
    background: {
      default: Colors.pastelGray,
      paper: Colors.pastelYellow,
    },
    text: {
      primary: '#DDDDDD',
    },
  },
  typography: {
    body1: {
      fontSize: '0.8rem',
      color: "red"
    },
    h5: {
      fontFamily: 'Teko',
      fontSize: '1.8rem',
      color: 'white',
      textTransform: 'uppercase',
    }
  }
});

export default theme;
//#ffd84b