import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faGithub)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
