import React, { useState, useEffect, useRef } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { ModuleRoute } from '../modules/types'
import ModuleManager from '../modules/module-manager'

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  isOpen: boolean
  isMobile: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isOpen,
  isMobile
}) => {
  const [moduleRoutes, setModuleRoutes] = useState<ModuleRoute[]>([])
  const [openSubmenus, setOpenSubmenus] = useState<{[key: string]: boolean}>({})
  const [activePopupSubmenu, setActivePopupSubmenu] = useState<string | null>(null)
  const [popupWidth, setPopupWidth] = useState<number>(200)
  const popupRef = useRef<HTMLDivElement>(null)
  const menuItemRef = useRef<{[key: string]: {
    element: HTMLButtonElement | null, 
    labelWidth: number
  }}>({})

  useEffect(() => {
    const loadModulesFromStorage = () => {
      try {
        const moduleManager = ModuleManager.getInstance()
        const enabledModules = moduleManager.getEnabledModules()

        const routes = enabledModules.flatMap(module => 
          module.routes ? module.routes.map(route => ({
            ...route,
            moduleName: module.id
          })) : []
        )

        setModuleRoutes(routes)
      } catch (error) {
        console.error('Error loading modules in Sidebar:', error)
      }
    }

    loadModulesFromStorage()

    const handleStorageChange = () => {
      loadModulesFromStorage()
    }

    // Close popup when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        !Object.values(menuItemRef.current).some(
          ref => ref.element && ref.element.contains(event.target as Node)
        )
      ) {
        setActivePopupSubmenu(null)
      }
    }

    window.addEventListener('moduleStatusChanged', handleStorageChange)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('moduleStatusChanged', handleStorageChange)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const defaultMenuItems = [
    { 
      name: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard 
    },
    { 
      name: 'users', 
      label: 'User Management', 
      icon: Users 
    },
    { 
      name: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3 
    }
  ]

  // Group routes by module
  const groupedModuleRoutes = moduleRoutes.reduce((acc, route) => {
    if (!acc[route.moduleName]) {
      acc[route.moduleName] = []
    }
    acc[route.moduleName].push(route)
    return acc
  }, {} as {[moduleName: string]: ModuleRoute[]})

  const toggleSubmenu = (moduleName: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [moduleName]: !prev[moduleName]
    }))
  }

  const handleMouseEnter = (moduleName: string, event: React.MouseEvent) => {
    if (!isOpen) {
      // Measure the width of the label text
      const labelElement = event.currentTarget.querySelector('span')
      const labelWidth = labelElement ? labelElement.offsetWidth : 200
      
      // Store reference and label width
      menuItemRef.current[moduleName] = {
        element: event.currentTarget as HTMLButtonElement,
        labelWidth: labelWidth + 80 // Add padding and icon width
      }

      // Set popup width based on label
      setPopupWidth(labelWidth + 80)
      setActivePopupSubmenu(moduleName)
    }
  }

  const renderPopupSubmenu = (moduleName: string, routes: ModuleRoute[]) => {
    if (routes.length <= 1 || activePopupSubmenu !== moduleName) return null

    // Get the position of the triggering menu item
    const triggerRef = menuItemRef.current[moduleName]
    const triggerElement = triggerRef?.element
    const triggerRect = triggerElement?.getBoundingClientRect()

    return (
      <div 
        ref={popupRef}
        className="
          fixed 
          bg-white dark:bg-secondary-800 
          shadow-lg 
          rounded-lg 
          border border-gray-200 dark:border-secondary-700
          z-50
          animate-fade-in
          overflow-hidden
        "
        style={{
          top: triggerRect ? `${triggerRect.top}px` : 'auto',
          left: triggerRect ? `${triggerRect.right + 10}px` : 'auto',
          width: `${popupWidth}px`
        }}
      >
        <div className="p-2">
          {routes.map(route => (
            <button
              key={route.name}
              onClick={() => {
                setCurrentPage(route.name.toLowerCase().replace(/\s/g, ''))
                setActivePopupSubmenu(null)
              }}
              className={`
                w-full text-left px-3 py-2 rounded-lg mb-1
                transition-colors duration-200
                ${currentPage === route.name.toLowerCase().replace(/\s/g, '')
                  ? 'bg-primary-500 text-white' 
                  : 'text-secondary-600 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-secondary-700'}
              `}
            >
              {route.name}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const renderMenuItems = () => {
    const menuItems = [
      ...defaultMenuItems,
      // Add module-based menu items
      ...Object.entries(groupedModuleRoutes).map(([moduleName, routes]) => ({
        name: moduleName,
        label: moduleName.toUpperCase(),
        icon: routes[0]?.icon || LayoutDashboard,
        submenu: routes
      }))
    ]

    return menuItems.map((item, index) => {
      // Handle default menu items
      if (!('submenu' in item)) {
        return (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.name)}
            className={`
              flex items-center w-full p-3 rounded-lg mb-2 
              transition-colors duration-200
              ${currentPage === item.name 
                ? 'bg-primary-500 text-white' 
                : 'text-secondary-600 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-secondary-700'}
              ${isOpen ? 'justify-start' : 'justify-center'}
            `}
            title={!isOpen ? item.label : ''}
          >
            <item.icon className={`
              ${isOpen ? 'mr-3' : ''} 
              ${currentPage === item.name 
                ? 'text-white' 
                : 'text-secondary-500 dark:text-secondary-400'}
            `} />
            {isOpen && (
              <span className={`
                ${currentPage === item.name 
                  ? 'text-white' 
                  : 'text-secondary-700 dark:text-secondary-200'}
              `}>
                {item.label}
              </span>
            )}
          </button>
        )
      }

      // Handle module-based menu items with potential submenu
      return (
        <div key={item.name} className="relative mb-2">
          <button
            onMouseEnter={(e) => handleMouseEnter(item.name, e)}
            onClick={() => {
              // If only one route, navigate directly
              if (item.submenu.length === 1) {
                const route = item.submenu[0]
                setCurrentPage(route.name.toLowerCase().replace(/\s/g, ''))
              } else if (isOpen) {
                // Toggle submenu for modules with multiple routes when sidebar is open
                toggleSubmenu(item.name)
              }
            }}
            className={`
              flex items-center w-full p-3 rounded-lg 
              transition-colors duration-200
              ${currentPage.startsWith(item.name.toLowerCase()) 
                ? 'bg-primary-500 text-white' 
                : 'text-secondary-600 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-secondary-700'}
              ${isOpen ? 'justify-start' : 'justify-center'}
            `}
            title={!isOpen ? item.label : ''}
          >
            <item.icon className={`
              ${isOpen ? 'mr-3' : ''} 
              ${currentPage.startsWith(item.name.toLowerCase())
                ? 'text-white' 
                : 'text-secondary-500 dark:text-secondary-400'}
            `} />
            {isOpen && (
              <div className="flex-1 flex justify-between items-center">
                <span className={`
                  ${currentPage.startsWith(item.name.toLowerCase())
                    ? 'text-white' 
                    : 'text-secondary-700 dark:text-secondary-200'}
                `}>
                  {item.label}
                </span>
                {item.submenu.length > 1 && (
                  isOpen && (
                    openSubmenus[item.name] ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                  )
                )}
              </div>
            )}
          </button>

          {/* Render inline submenu when sidebar is open */}
          {isOpen && item.submenu.length > 1 && openSubmenus[item.name] && (
            <div 
              className={`
                pl-4 mt-2
              `}
            >
              {item.submenu.map(route => (
                <button
                  key={route.name}
                  onClick={() => setCurrentPage(route.name.toLowerCase().replace(/\s/g, ''))}
                  className={`
                    w-full text-left pl-4 py-2 rounded-lg mb-1
                    text-sm
                    transition-colors duration-200
                    ${currentPage === route.name.toLowerCase().replace(/\s/g, '')
                      ? 'bg-primary-500 text-white' 
                      : 'text-secondary-600 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-secondary-700'}
                  `}
                >
                  {route.name}
                </button>
              ))}
            </div>
          )}

          {/* Render popup submenu when sidebar is closed */}
          {!isOpen && renderPopupSubmenu(item.name, item.submenu)}
        </div>
      )
    })
  }

  return (
    <div 
      className={`
        bg-white dark:bg-secondary-800 
        shadow-lg h-full 
        fixed top-0 left-0 bottom-0 z-50
        transition-all duration-300 ease-in-out
        ${isMobile 
          ? `${isOpen ? 'w-64' : 'w-0'}` 
          : `${isOpen ? 'w-64' : 'w-20'}`
        }
        border-r border-gray-100 dark:border-secondary-700
      `}
      style={{ 
        visibility: isMobile && !isOpen ? 'hidden' : 'visible',
        overflowX: 'hidden'
      }}
    >
      <div className="relative h-full flex flex-col">
        <nav className="p-4 flex-1 overflow-y-auto">
          {renderMenuItems()}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
