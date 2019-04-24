import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from './styles/settings/theme'
import { GlobalStyles } from './styles/global'
import { AtomicPage } from './pages/atomic-page'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <AtomicPage />
      </ThemeProvider>
    )
  }
}

export default App
