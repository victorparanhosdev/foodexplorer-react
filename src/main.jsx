import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./styles/global.js"
import { Routes } from './routes/index.jsx'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme.js"
import { AuthProvider } from "./hooks/auth.jsx"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>

      <Routes />

      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

