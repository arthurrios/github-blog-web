import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
