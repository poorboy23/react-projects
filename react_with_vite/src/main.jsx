import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Simplecomponent from './Component1.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <App />
    <Simplecomponent/>
  </StrictMode>
  </>
)
