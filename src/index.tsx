import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import ModuleManager from './modules/module-manager'

// Initialize module manager on app startup
const initializeApp = async () => {
  try {
    const moduleManager = ModuleManager.getInstance()
    await moduleManager.initializeSystemModules()

    const root = createRoot(document.getElementById('root')!)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Application initialization failed:', error)
    
    // Fallback rendering in case of critical error
    const root = createRoot(document.getElementById('root')!)
    root.render(
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Application Initialization Error</h1>
          <p>Please refresh the page or contact support.</p>
        </div>
      </div>
    )
  }
}

initializeApp()
