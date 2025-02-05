import React, { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'

interface SlidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  position?: 'right' | 'left'
  size?: 'default' | 'wide' | 'narrow'
}

const SlidePanel: React.FC<SlidePanelProps> = ({
  isOpen, 
  onClose, 
  title, 
  children,
  position = 'right',
  size = 'default'
}) => {
  // Close panel on Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  // Determine panel width based on size
  const getSizeClass = () => {
    switch (size) {
      case 'narrow': return 'w-96'
      case 'wide': return 'w-[800px]'
      default: return 'w-[500px]'
    }
  }

  // Determine slide-in animation based on position
  const getPositionClass = () => {
    const baseClass = `
      fixed top-0 bottom-0 bg-white dark:bg-secondary-800 
      shadow-2xl z-50 overflow-y-auto
      transition-transform duration-300 ease-in-out
    `
    
    if (position === 'right') {
      return `${baseClass} right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
    }
    
    return `${baseClass} left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="
            fixed inset-0 bg-black bg-opacity-50 
            z-40 backdrop-blur-sm
          "
          onClick={onClose}
        />
      )}

      {/* Slide Panel */}
      <div className={getPositionClass()}>
        <div className={`${getSizeClass()} h-full flex flex-col`}>
          {/* Header */}
          <div className="
            flex justify-between items-center 
            p-6 border-b 
            dark:border-secondary-700
          ">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="
                text-gray-600 dark:text-gray-300
                hover:text-gray-800 dark:hover:text-gray-100
                p-2 rounded-full 
                hover:bg-gray-100 dark:hover:bg-secondary-700
                transition-colors
              "
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default SlidePanel
