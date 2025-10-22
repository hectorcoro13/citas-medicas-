import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  
import './reset.css'
import App from './App.jsx'
import { UsersProvider } from './context/UsersContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UsersProvider>
  </StrictMode>,
)
