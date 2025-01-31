import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Import module initializers
import { initialize as initializeSalesModule } from './modules/sales'

// Initialize modules
initializeSalesModule()

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
