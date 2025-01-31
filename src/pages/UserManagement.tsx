import React, { useState, useCallback } from 'react'
import { 
  Edit, 
  Trash2, 
  Shield, 
  Users as UsersIcon, 
  Lock, 
  UserPlus 
} from 'lucide-react'
import { User, UserRole, UserGroup, Permission, PermissionType } from '../types/user'

const initialUsers: User[] = [
  {
    id: '1',
    username: 'admin_user',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: UserRole.ADMIN,
    groups: [],
    permissions: [],
    status: 'active',
    createdAt: new Date()
  },
  {
    id: '2',
    username: 'manager_user',
    email: 'manager@example.com',
    firstName: 'Manager',
    lastName: 'User',
    role: UserRole.MANAGER,
    groups: [],
    permissions: [],
    status: 'active',
    createdAt: new Date()
  }
]

const initialGroups: UserGroup[] = [
  {
    id: '1',
    name: 'Administrators',
    description: 'Full system access',
    permissions: [
      { 
        id: 'perm_1', 
        name: 'Full System Access', 
        type: PermissionType.MANAGE 
      }
    ]
  },
  {
    id: '2',
    name: 'Editors',
    description: 'Content management',
    permissions: [
      { 
        id: 'perm_2', 
        name: 'Content Write', 
        type: PermissionType.WRITE 
      }
    ]
  }
]

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [groups, setGroups] = useState<UserGroup[]>(initialGroups)
  const [activeTab, setActiveTab] = useState<'users' | 'groups'>('users')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [selectedGroup, setSelectedGroup] = useState<UserGroup | null>(null)

  const handleDeleteUser = useCallback((userId: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }, [])

  const handleDeleteGroup = useCallback((groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId))
  }, [])

  const renderUserTable = () => (
    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-secondary-700">
          <tr>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr 
              key={user.id} 
              className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
            >
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded text-xs uppercase
                  ${user.role === UserRole.ADMIN 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
                    user.role === UserRole.MANAGER 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}
                `}>
                  {user.role}
                </span>
              </td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded text-xs uppercase
                  ${user.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                    user.status === 'inactive'
                    ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                `}>
                  {user.status}
                </span>
              </td>
              <td className="p-3 text-right">
                <div className="flex justify-end space-x-2">
                  <button 
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
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

  const renderGroupTable = () => (
    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-secondary-700">
          <tr>
            <th className="p-3 text-left">Group Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Permissions</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr 
              key={group.id} 
              className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
            >
              <td className="p-3">{group.name}</td>
              <td className="p-3">{group.description}</td>
              <td className="p-3">
                {group.permissions.map(perm => (
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
                    onClick={() => setSelectedGroup(group)}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeleteGroup(group.id)}
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

  return (
    <div className="dark:bg-secondary-900 dark:text-gray-100 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold dark:text-gray-200">
          User Management
        </h1>
        <div className="flex space-x-4">
          <button 
            className={`
              px-4 py-2 rounded-lg flex items-center space-x-2
              ${activeTab === 'users' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300'}
            `}
            onClick={() => setActiveTab('users')}
          >
            <UsersIcon size={20} />
            <span>Users</span>
          </button>
          <button 
            className={`
              px-4 py-2 rounded-lg flex items-center space-x-2
              ${activeTab === 'groups' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300'}
            `}
            onClick={() => setActiveTab('groups')}
          >
            <UsersIcon size={20} />
            <span>Groups</span>
          </button>
        </div>
      </div>

      {activeTab === 'users' ? renderUserTable() : renderGroupTable()}
    </div>
  )
}

export default UserManagement
