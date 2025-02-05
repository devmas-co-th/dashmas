import React, { useState, useEffect } from 'react'
import ModuleManager from '../modules/module-manager'
import { ModuleConfig } from '../modules/types'

interface TabConfig {
  id: string
  label: string
  component: React.ComponentType
  icon?: React.ElementType
}

interface TabProps {
  moduleId: string
  pageName: string
}

const Tab: React.FC<TabProps> = ({ moduleId, pageName }) => {
  const [tabs, setTabs] = useState<TabConfig[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)

  useEffect(() => {
    const loadTabsForPage = () => {
      const moduleManager = ModuleManager.getInstance()
      const module = moduleManager.getAllModules().find(m => m.id === moduleId)

      if (module && module.pageTabs) {
        const pageTabs = module.pageTabs.filter(
          tab => tab.page === pageName
        )

        if (pageTabs.length > 0) {
          const tabConfigs: TabConfig[] = pageTabs.map(tab => ({
            id: tab.id,
            label: tab.label,
            component: tab.component,
            icon: tab.icon
          }))

          setTabs(tabConfigs)
          
          // Set first tab as active by default
          if (tabConfigs.length > 0) {
            setActiveTab(tabConfigs[0].id)
          }
        }
      }
    }

    loadTabsForPage()
  }, [moduleId, pageName])

  if (tabs.length === 0) {
    return null
  }

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || (() => null)

  return (
    <div>
      <div className="flex border-b dark:border-secondary-700 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 
              flex items-center 
              border-b-2 
              transition-colors
              ${activeTab === tab.id 
                ? 'border-primary-500 text-primary-500' 
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}
            `}
          >
            {tab.icon && <tab.icon className="mr-2" size={16} />}
            {tab.label}
          </button>
        ))}
      </div>
      
      <div>
        <ActiveComponent />
      </div>
    </div>
  )
}

export default Tab
