import React from 'react'
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings as SettingsIcon
} from 'lucide-react'

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
  const menuItems = [
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
    },
    { 
      name: 'settings', 
      label: 'Settings', 
      icon: SettingsIcon 
    }
  ]

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
        {/* Navigation Menu */}
        <nav className="p-4 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setCurrentPage(item.name)
              }}
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
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
