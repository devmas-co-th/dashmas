import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      
      // Auto-close sidebar on mobile
      if (mobile) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(false)  // Keep closed by default
      }
    }

    // Check initial screen size
    checkMobile()

    // Add event listener for resize
    window.addEventListener('resize', checkMobile)

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />
      case 'users': return <UserManagement />
      case 'analytics': return <Analytics />
      case 'settings': return <Settings />
      default: return <Dashboard />
    }
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
