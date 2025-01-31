import React, { useState, useCallback } from 'react'
import { 
  Shield, 
  Edit, 
  Trash2, 
  Lock, 
  Unlock 
} from 'lucide-react'
import { 
  UserRole, 
  Permission, 
  PermissionType 
} from '../types/user'

// Initial Permission Definitions
const initialPermissions: Permission[] = [
  {
    id: 'perm_dashboard_view',
    name: 'Dashboard View',
    type: PermissionType.READ,
    description: 'View dashboard analytics and statistics'
  },
  {
    id: 'perm_user_manage',
    name: 'User Management',
    type: PermissionType.MANAGE,
    description: 'Full user management access'
  },
  {
    id: 'perm_content_edit',
    name: 'Content Edit',
    type: PermissionType.WRITE,
    description: 'Edit and modify content'
  }
]

// Role-based Permission Mappings
const initialRolePermissions = {
  [UserRole.ADMIN]: {
    name: 'Administrator',
    description: 'Full system access',
    permissions: initialPermissions
  },
  [UserRole.MANAGER]: {
    name: 'Manager',
    description: 'Operational management',
    permissions: [
      initialPermissions.find(p => p.id === 'perm_dashboard_view')!,
      initialPermissions.find(p => p.id === 'perm_user_manage')!
    ]
  },
  [UserRole.EDITOR]: {
    name: 'Editor',
    description: 'Content creation and editing',
    permissions: [
      initialPermissions.find(p => p.id === 'perm_dashboard_view')!,
      initialPermissions.find(p => p.id === 'perm_content_edit')!
    ]
  },
  [UserRole.VIEWER]: {
    name: 'Viewer',
    description: 'Read-only access',
    permissions: [
      initialPermissions.find(p => p.id === 'perm_dashboard_view')!
    ]
  }
}

const PermissionManagement: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions)
  const [rolePermissions, setRolePermissions] = useState(initialRolePermissions)
  const [activeTab, setActiveTab] = useState<'permissions' | 'roles'>('permissions')
  const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null)
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  const handleDeletePermission = useCallback((permissionId: string) => {
    setPermissions(prev => prev.filter(p => p.id !== permissionId))
  }, [])

  const renderPermissionTable = () => (
    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-secondary-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map(permission => (
            <tr 
              key={permission.id} 
              className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
            >
              <td className="p-3">{permission.name}</td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded text-xs uppercase
                  ${permission.type === PermissionType.MANAGE 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
                    permission.type === PermissionType.WRITE 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}
                `}>
                  {permission.type}
                </span>
              </td>
              <td className="p-3">{permission.description}</td>
              <td className="p-3 text-right">
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => setSelectedPermission(permission)}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeletePermission(permission.id)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderRoleTable = () => (
    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-secondary-700">
          <tr>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Permissions</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rolePermissions).map(([role, roleData]) => (
            <tr 
              key={role} 
              className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
            >
              <td className="p-3">{roleData.name}</td>
              <td className="p-3">{roleData.description}</td>
              <td className="p-3">
                {roleData.permissions.map(perm => (
                  <span 
                    key={perm.id}
                    className="
                      inline-block mr-2 mb-1 px-2 py-1 
                      bg-primary-100 text-primary-800
                      dark:bg-primary-900 dark:text-primary-300
                      rounded text-xs uppercase
                    "
                  >
                    {perm.name}
                  </span>
                ))}
              </td>
              <td className="p-3 text-right">
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => setSelectedRole(role as UserRole)}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Edit size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="dark:bg-secondary-900 dark:text-gray-100 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold dark:text-gray-200">
          Permissions & Roles
        </h1>
        <div className="flex space-x-4">
          <button 
            className={`
              px-4 py-2 rounded-lg flex items-center space-x-2
              ${activeTab === 'permissions' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300'}
            `}
            onClick={() => setActiveTab('permissions')}
          >
            <Shield size={20} />
            <span>Permissions</span>
          </button>
          <button 
            className={`
              px-4 py-2 rounded-lg flex items-center space-x-2
              ${activeTab === 'roles' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300'}
            `}
            onClick={() => setActiveTab('roles')}
          >
            <Lock size={20} />
            <span>Roles</span>
          </button>
        </div>
      </div>

      {activeTab === 'permissions' ? renderPermissionTable() : renderRoleTable()}
    </div>
  )
}

export default PermissionManagement
