import React, { useState, useEffect } from 'react'
import { 
  User, 
  Shield, 
  Lock, 
  Bell, 
  Puzzle,
  ToggleLeft,
  ToggleRight,
  Edit,
  Save,
  Key,
  Mail,
  Phone
} from 'lucide-react'
import ModuleManager from '../modules/module-manager'
import { ModuleConfig } from '../modules/types'
import { loadModules } from '../modules/module-loader'

// Profile Settings Component
const ProfileSettings: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: ''
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSaveProfile = () => {
    // Implement actual save logic
    console.log('Saving Profile:', profile)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6 bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center border-b pb-4 dark:border-secondary-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Profile Information
        </h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`
            flex items-center px-4 py-2 rounded-lg
            ${isEditing 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-primary-500 text-white hover:bg-primary-600'}
          `}
        >
          {isEditing ? (
            <>
              <Save className="mr-2" size={18} />
              Save
            </>
          ) : (
            <>
              <Edit className="mr-2" size={18} />
              Edit
            </>
          )}
        </button>
      </div>

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
            disabled={!isEditing}
            className={`
              w-full px-3 py-2 border rounded-md
              ${isEditing 
                ? 'border-gray-300 dark:border-secondary-700 bg-white dark:bg-secondary-900' 
                : 'border-transparent bg-gray-100 dark:bg-secondary-700'}
              text-gray-900 dark:text-gray-200
            `}
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
            disabled={!isEditing}
            className={`
              w-full px-3 py-2 border rounded-md
              ${isEditing 
                ? 'border-gray-300 dark:border-secondary-700 bg-white dark:bg-secondary-900' 
                : 'border-transparent bg-gray-100 dark:bg-secondary-700'}
              text-gray-900 dark:text-gray-200
            `}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <div className="flex items-center">
          <Mail className="mr-3 text-gray-500 dark:text-gray-400" />
          <input 
            type="email" 
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`
              flex-1 px-3 py-2 border rounded-md
              ${isEditing 
                ? 'border-gray-300 dark:border-secondary-700 bg-white dark:bg-secondary-900' 
                : 'border-transparent bg-gray-100 dark:bg-secondary-700'}
              text-gray-900 dark:text-gray-200
            `}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Phone Number
        </label>
        <div className="flex items-center">
          <Phone className="mr-3 text-gray-500 dark:text-gray-400" />
          <input 
            type="tel" 
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`
              flex-1 px-3 py-2 border rounded-md
              ${isEditing 
                ? 'border-gray-300 dark:border-secondary-700 bg-white dark:bg-secondary-900' 
                : 'border-transparent bg-gray-100 dark:bg-secondary-700'}
              text-gray-900 dark:text-gray-200
            `}
          />
        </div>
      </div>
    </div>
  )
}

// Security Settings Component
const SecuritySettings: React.FC = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordReset: false,
    loginHistory: false
  })

  const [passwordSettings, setPasswordSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const toggleSecuritySetting = (setting: keyof typeof securitySettings) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordSettings(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement password change logic
    console.log('Changing Password:', passwordSettings)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Security Preferences
        </h2>
        {Object.entries(securitySettings).map(([key, value]) => (
          <div 
            key={key} 
            className="flex justify-between items-center border-b last:border-b-0 py-4 dark:border-secondary-700"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {key === 'twoFactorAuth' && 'Add an extra layer of security'}
                {key === 'passwordReset' && 'Manage password reset options'}
                {key === 'loginHistory' && 'Track and manage login activities'}
              </p>
            </div>
            <button 
              onClick={() => toggleSecuritySetting(key as keyof typeof securitySettings)}
              className={`
                px-4 py-2 rounded-full transition-colors
                ${value 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-700 dark:bg-secondary-700 dark:text-gray-300'}
              `}
            >
              {value ? 'Enabled' : 'Enable'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Change Password
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Password
            </label>
            <div className="flex items-center">
              <Key className="mr-3 text-gray-500 dark:text-gray-400" />
              <input 
                type="password" 
                name="currentPassword"
                value={passwordSettings.currentPassword}
                onChange={handlePasswordChange}
                className="
                  flex-1 px-3 py-2 border border-gray-300 
                  dark:border-secondary-700 rounded-md 
                  bg-white dark:bg-secondary-900 
                  text-gray-900 dark:text-gray-200
                "
                placeholder="Enter current password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              New Password
            </label>
            <div className="flex items-center">
              <Key className="mr-3 text-gray-500 dark:text-gray-400" />
              <input 
                type="password" 
                name="newPassword"
                value={passwordSettings.newPassword}
                onChange={handlePasswordChange}
                className="
                  flex-1 px-3 py-2 border border-gray-300 
                  dark:border-secondary-700 rounded-md 
                  bg-white dark:bg-secondary-900 
                  text-gray-900 dark:text-gray-200
                "
                placeholder="Enter new password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirm New Password
            </label>
            <div className="flex items-center">
              <Key className="mr-3 text-gray-500 dark:text-gray-400" />
              <input 
                type="password" 
                name="confirmPassword"
                value={passwordSettings.confirmPassword}
                onChange={handlePasswordChange}
                className="
                  flex-1 px-3 py-2 border border-gray-300 
                  dark:border-secondary-700 rounded-md 
                  bg-white dark:bg-secondary-900 
                  text-gray-900 dark:text-gray-200
                "
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="
              w-full bg-primary-500 text-white 
              py-2 rounded-md hover:bg-primary-600 
              transition-colors
            "
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}

// Notification Settings Component
const NotificationSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: false,
    push: false,
    sms: false,
    inApp: false
  })

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Notification Preferences
        </h2>
        {Object.entries(notifications).map(([key, value]) => (
          <div 
            key={key} 
            className="flex justify-between items-center border-b last:border-b-0 py-4 dark:border-secondary-700"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">
                {key} Notifications
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Receive {key} notifications
              </p>
            </div>
            <button
              onClick={() => toggleNotification(key as keyof typeof notifications)}
              className={`
                px-4 py-2 rounded-full transition-colors
                ${value 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-700 dark:bg-secondary-700 dark:text-gray-300'}
              `}
            >
              {value ? 'On' : 'Off'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Module Management Component
const ModuleManagement: React.FC = () => {
  const [modules, setModules] = useState<ModuleConfig[]>([])
  const moduleManager = ModuleManager.getInstance()

  useEffect(() => {
    const initializeModuleList = async () => {
      try {
        // Load all discovered modules
        const discoveredModules = await loadModules()
        
        // Get currently enabled modules
        const enabledModules = moduleManager.getEnabledModules()

        // Combine module information with enabled status
        const modulesWithStatus = discoveredModules.map(module => ({
          ...module,
          enabled: enabledModules.some(m => m.id === module.id)
        }))

        setModules(modulesWithStatus)
      } catch (error) {
        console.error('Error initializing module list:', error)
      }
    }

    initializeModuleList()
  }, [])

  const toggleModuleStatus = (moduleId: string) => {
    const updatedModules = modules.map(module => 
      module.id === moduleId 
        ? { ...module, enabled: !module.enabled } 
        : module
    )

    // Update modules state
    setModules(updatedModules)

    // Update module status in ModuleManager
    const moduleToUpdate = updatedModules.find(m => m.id === moduleId)
    if (moduleToUpdate) {
      moduleToUpdate.enabled 
        ? moduleManager.enableModule(moduleId)
        : moduleManager.disableModule(moduleId)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center mb-4">
          <Puzzle className="mr-3" /> Module Management
        </h2>
        {modules.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No modules discovered
          </div>
        ) : (
          <div className="space-y-4">
            {modules.map(module => (
              <div 
                key={module.id} 
                className="
                  bg-gray-100 dark:bg-secondary-700
                  p-4 rounded-lg 
                  flex justify-between items-center
                "
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {module.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>Version: {module.version}</span>
                  </div>
                </div>
                <button 
                  onClick={() => toggleModuleStatus(module.id)}
                  className={`
                    p-2 rounded-full transition-colors
                    ${module.enabled 
                      ? 'text-green-500 hover:bg-green-100' 
                      : 'text-gray-400 hover:bg-gray-200'}
                  `}
                  aria-label={`Toggle ${module.name} module`}
                >
                  {module.enabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Main Settings Component
const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('profile')

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
    <div className="flex bg-gray-50 dark:bg-secondary-900 min-h-screen">
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
                w-full flex items-center p-3 rounded-lg transition-colors
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

export default Settings
