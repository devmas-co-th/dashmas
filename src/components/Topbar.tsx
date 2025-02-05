import React from 'react'
import { 
  Bell, 
  Search, 
  User, 
  Menu,
  Sun,
  Moon,
  AlignLeft,
  Settings  // Added Settings icon
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface TopbarProps {
  toggleSidebar: () => void
  isMobile: boolean
  isOpen: boolean
  setCurrentPage: (page: string) => void  // Added prop to change current page
}

const Topbar: React.FC<TopbarProps> = ({ 
  toggleSidebar, 
  isMobile, 
  isOpen,
  setCurrentPage  // Destructure new prop
}) => {
  const { isDarkMode, toggleTheme } = useTheme()

  const handleOpenSettings = () => {
    setCurrentPage('settings')
  }

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-40
      bg-white/80 dark:bg-secondary-900/80 
      backdrop-blur-md 
      border-b border-gray-100 dark:border-secondary-800
      h-16 
      ${!isMobile 
        ? (isOpen 
          ? 'pl-64' 
          : 'pl-20') 
        : 'pl-0'
      }
      pr-4
      flex items-center
    `}>
      <div className="
        flex-1 
        flex items-center justify-between
        px-4
      ">
        {/* Sidebar Toggle and Branding */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle */}
          <button 
            onClick={toggleSidebar}
            className="
              p-2 
              bg-gray-100 dark:bg-secondary-800 
              rounded-md 
              hover:bg-gray-200 dark:hover:bg-secondary-700
              transition-colors
            "
          >
            <AlignLeft className="
              text-secondary-600 
              dark:text-secondary-300
              w-5 h-5
            " />
          </button>

          {/* Branding */}
          <div className="flex items-center space-x-2">
            <div className="
              w-8 h-8 
              bg-primary-500 
              rounded-full 
              flex items-center 
              justify-center
            ">
              <span className="
                text-white 
                text-xs 
                font-bold
              ">
                D
              </span>
            </div>
            <span className="
              text-secondary-800 
              dark:text-secondary-200 
              font-bold
              hidden md:inline
            ">
              Dashboard
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="
            flex items-center 
            bg-gray-100 dark:bg-secondary-800 
            rounded-full 
            px-4 py-2
          ">
            <Search className="
              text-secondary-500 dark:text-secondary-400 
              mr-2
              w-5 h-5
            " />
            <input 
              type="text" 
              placeholder="Search..." 
              className="
                bg-transparent 
                outline-none 
                w-full 
                text-secondary-700 dark:text-secondary-200
                placeholder-secondary-500 dark:placeholder-secondary-500
              "
            />
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-4">
          {/* Settings Button */}
          <button 
            onClick={handleOpenSettings}
            className="
              p-2 rounded-full 
              hover:bg-gray-100 dark:hover:bg-secondary-800
              transition-colors
              group
              flex items-center justify-center
            "
            title="Open Settings"
          >
            <Settings className="
              text-secondary-600 
              group-hover:text-secondary-700
              dark:text-secondary-400 
              dark:group-hover:text-secondary-300
              w-5 h-5
            " />
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="
              p-2 rounded-full 
              hover:bg-gray-100 dark:hover:bg-secondary-800
              transition-colors
              group
              flex items-center justify-center
            "
            title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}
          >
            {isDarkMode ? (
              <Sun className="
                text-secondary-600 
                group-hover:text-secondary-700
                dark:text-secondary-300 
                dark:group-hover:text-secondary-200
                w-5 h-5
              " />
            ) : (
              <Moon className="
                text-secondary-600 
                group-hover:text-secondary-700
                w-5 h-5
              " />
            )}
          </button>

          {/* Notifications */}
          <button className="
            relative 
            p-2 rounded-full 
            hover:bg-gray-100 dark:hover:bg-secondary-800
            transition-colors
            group
            flex items-center justify-center
          ">
            <Bell className="
              text-secondary-600 
              group-hover:text-secondary-700
              dark:text-secondary-400 
              dark:group-hover:text-secondary-300
              w-5 h-5
            " />
            <span className="
              absolute -top-1 -right-1
              bg-primary-500 text-white 
              rounded-full 
              px-1.5 py-0.5 
              text-xs
              animate-pulse
            ">
              3
            </span>
          </button>

          {/* User Profile */}
          <button className="
            flex items-center 
            hover:bg-gray-100 dark:hover:bg-secondary-800
            rounded-full 
            p-1 
            pr-3
            transition-colors
            group
          ">
            <div className="
              w-8 h-8 
              bg-primary-500 
              rounded-full 
              mr-2 
              flex items-center 
              justify-center
              group-hover:ring-2 
              group-hover:ring-primary-300
              transition-all
            ">
              <User className="text-white w-4 h-4" />
            </div>
            <span className="
              text-secondary-700 
              dark:text-secondary-300
              text-sm
              hidden md:inline
            ">
              Admin
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar
