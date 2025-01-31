import React, { useState, useEffect } from 'react'
import { 
  User, 
  Shield, 
  Lock, 
  Bell, 
  Palette, 
  Puzzle,
  ToggleLeft,
  ToggleRight
} from 'lucide-react'

// Dynamic module loader
const loadModules = () => {
  const moduleContext = import.meta.glob('../modules/*/config.ts')
  return Promise.all(
    Object.entries(moduleContext).map(async ([path, loader]) => {
      const moduleName = path.split('/')[2]
      const moduleConfig = await loader()
      return {
        id: moduleName,
        name: moduleConfig.default.name,
        description: moduleConfig.default.description,
        enabled: true
      }
    })
  )
}

const  Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile')

  const settingsSections = [
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      component: ProfileSettings
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      component: SecuritySettings
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      component: NotificationSettings
    },
    {
      id: 'modules',
      title: 'Modules',
      icon: Puzzle,
      component: ModuleManagement
    }
  ]

  const ActiveComponent = settingsSections.find(
    section => section.id === activeSection
  )?.component || ProfileSettings

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-secondary-900">
      <div className="w-64 bg-white dark:bg-secondary-800 border-r dark:border-secondary-700 p-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Settings
        </h2>
        <div className="space-y-2">
          {settingsSections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                w-full 
                flex items-center 
                p-3 
                rounded-lg 
                transition-colors
                ${activeSection === section.id 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700'}
              `}
            >
              <section.icon className="mr-3" size={20} />
              {section.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        <ActiveComponent />
      </div>
    </div>
  )
}

function ProfileSettings() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Profile updated:', profile)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Profile Settings
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input 
              type="text" 
              name="firstName"
              value={profile.firstName}
              onChange={handleInputChange}
              className="
                w-full 
                px-3 py-2 
                border border-gray-300 
                dark:border-secondary-700 
                rounded-md 
                bg-white 
                dark:bg-secondary-800 
                text-gray-900 
                dark:text-gray-200
              " 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input 
              type="text" 
              name="lastName"
              value={profile.lastName}
              onChange={handleInputChange}
              className="
                w-full 
                px-3 py-2 
                border border-gray-300 
                dark:border-secondary-700 
                rounded-md 
                bg-white 
                dark:bg-secondary-800 
                text-gray-900 
                dark:text-gray-200
              " 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input 
            type="email" 
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="
              w-full 
              px-3 py-2 
              border border-gray-300 
              dark:border-secondary-700 
              rounded-md 
              bg-white 
              dark:bg-secondary-800 
              text-gray-900 
              dark:text-gray-200
            " 
          />
        </div>
        <div className="pt-4">
          <button 
            type="submit"
            className="
              bg-primary-500 
              text-white 
              px-4 py-2 
              rounded-md 
              hover:bg-primary-600
              transition-colors
            "
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false)

  const toggleTwoFactor = () => {
    setTwoFactor(!twoFactor)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Security Settings
      </h2>
      <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Add an extra layer of security to your account
            </p>
          </div>
          <button 
            onClick={toggleTwoFactor}
            className={`
              px-4 py-2 
              rounded-md 
              transition-colors
              ${twoFactor 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 dark:bg-secondary-700 dark:text-gray-300'}
            `}
          >
            {twoFactor ? 'Enabled' : 'Enable'}
          </button>
        </div>
      </div>
    </div>
  )
}

function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: false,
    push: false
  })

  const handleNotificationToggle = (type: 'email' | 'push') => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Notification Preferences
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-300">
            Email Notifications
          </span>
          <input 
            type="checkbox" 
            checked={notifications.email}
            onChange={() => handleNotificationToggle('email')}
            className="
              toggle 
              dark:bg-secondary-700 
              dark:after:bg-secondary-300
            " 
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-300">
            Push Notifications
          </span>
          <input 
            type="checkbox" 
            checked={notifications.push}
            onChange={() => handleNotificationToggle('push')}
            className="
              toggle 
              dark:bg-secondary-700 
              dark:after:bg-secondary-300
            " 
          />
        </div>
      </div>
    </div>
  )
}

function ModuleManagement() {
  const [modules, setModules] = useState<any[]>([])

  useEffect(() => {
    loadModules().then(setModules)
  }, [])

  const toggleModuleStatus = (moduleId: string) => {
    setModules(prevModules => 
      prevModules.map(module => 
        module.id === moduleId 
          ? { ...module, enabled: !module.enabled } 
          : module
      )
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
        <Puzzle className="mr-3" /> Module Management
      </h2>
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        {modules.map(module => (
          <div 
            key={module.id} 
            className="
              p-4 
              border-b 
              last:border-b-0 
              dark:border-secondary-700 
              flex 
              justify-between 
              items-center
            "
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {module.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {module.description}
              </p>
            </div>
            <button 
              onClick={() => toggleModuleStatus(module.id)}
              className={`
                p-2 
                rounded-full 
                transition-colors
                ${module.enabled 
                  ? 'text-green-500 hover:bg-green-100' 
                  : 'text-gray-400 hover:bg-gray-100'}
              `}
            >
              {module.enabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
