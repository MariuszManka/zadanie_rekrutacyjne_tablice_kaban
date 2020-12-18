import React from 'react';
import GlobalStyle from 'theme/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {theme} from "theme/mainTheme"
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import {MainView} from 'components/views'

const materialTheme = createMuiTheme(theme)

function App() {
  return (
   <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MaterialThemeProvider theme={materialTheme}>
      <>
        <MainView />
      </>
        </MaterialThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
