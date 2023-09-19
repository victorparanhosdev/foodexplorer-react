import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./styles/global.js"
import {SignUp} from "./pages/SignUp/index.jsx"
import {SignIn} from "./pages/SignIn/index.jsx"
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SignIn/>
    </ThemeProvider>
  </React.StrictMode>,
)

