import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Page from './app/nav';
import Nyx from './app/pages/Nyx';

const PRIMARY = '#93D7FF';
const SECONDARY = '#E32D91';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    info: {
      main: '#101010',
    },
    background: {
      default: '#262626',
    },
  },
  typography: {
    fontFamily: [
      'SuttonSignWritingOneD',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      textIndent: '16pt',
    },
    h1: {
      textIndent: '0pt',
      fontSize: '44pt',
      fontWeight: 800,
      color: '#BFBFBF',
      borderBottom: `1px ${SECONDARY} solid`,
      paddingBottom: '10pt',
      marginBottom: '10pt',
    },
    h2: {
      textIndent: '0pt',
      fontSize: '24pt',
      fontWeight: 'bolder',
      color: '#ED80BD',
      marginTop: '5pt',
      marginBottom: '5pt',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page>
        <Nyx />
      </Page>
    </ThemeProvider>
  );
}

export default App;
