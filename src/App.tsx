import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import ModuleManager from './modules/module-manager'
import { ModuleRoute } from './modules/types'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [moduleRoutes, setModuleRoutes] = useState<ModuleRoute[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeApplication = async () => {
      try {
        const moduleManager = ModuleManager.getInstance()
        
        // Initialize system modules
        await moduleManager.initializeSystemModules()
        
        // Get enabled modules and their routes
        const enabledModules = moduleManager.getEnabledModules()
        console.log('Enabled Modules:', enabledModules)

        const routes = enabledModules.flatMap(module => 
          module.routes ? module.routes.map(route => ({
            ...route,
            moduleName: module.id
          })) : []
        )

        console.log('Module Routes:', routes)
        setModuleRoutes(routes)
        setIsLoading(false)
      } catch (error) {
        console.error('Application initialization failed:', error)
        setIsLoading(false)
      }
    }

    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      setIsSidebarOpen(false)
    }

    // Initialize application and set up resize listener
    initializeApplication()
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderPage = () => {
    // Default pages
    const defaultPages: {[key: string]: React.ComponentType} = {
      'dashboard': Dashboard,
      'users': UserManagement,
      'analytics': Analytics,
      'settings': Settings
    }

    // Check default pages first
    if (defaultPages[currentPage]) {
      return React.createElement(defaultPages[currentPage])
    }

    // Check module routes
    const moduleRoute = moduleRoutes.find(route => 
      route.name.toLowerCase().replace(/\s/g, '') === currentPage
    )

    console.log('Current Page:', currentPage)
    console.log('Module Route Found:', moduleRoute)

    return moduleRoute 
      ? React.createElement(moduleRoute.component)
      : React.createElement(Dashboard)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-secondary-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-secondary-900 text-secondary-900 dark:text-gray-100">
        {/* Mobile Overlay */}
        {isMobile && isSidebarOpen && (
          <div 
            className="
              fixed inset-0 z-40 
              bg-black bg-opacity-50 
              backdrop-blur-sm
            "
            onClick={toggleSidebar}
          />
        )}

        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          moduleRoutes={moduleRoutes}
        />
        <div className={`
          flex-1 flex flex-col 
          transition-all duration-300 ease-in-out
          pt-16
          ${!isMobile 
            ? (isSidebarOpen 
              ? 'ml-64' 
              : 'ml-20') 
            : ''
          }
        `}>
          <Topbar 
            toggleSidebar={toggleSidebar} 
            isMobile={isMobile}
            isOpen={isSidebarOpen}
          />
          <main 
            className="flex-1 overflow-y-auto p-4 md:p-6"
            onClick={isMobile && isSidebarOpen ? toggleSidebar : undefined}
          >
            {renderPage()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
