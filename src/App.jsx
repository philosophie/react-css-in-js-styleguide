import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from './styles/settings/theme'
import { GlobalStyles } from './styles/global'
import { AtomicPage } from './pages/atomic-page'
import { RebassLayout } from './pages/rebass-layout'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <AtomicPage />
        <RebassLayout />
      </ThemeProvider>
    )
  }
}

export default App
