export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EDITOR = 'editor',
  VIEWER = 'viewer'
}

export enum PermissionType {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  MANAGE = 'manage'
}

export interface Permission {
  id: string
  name: string
  type: PermissionType
  description: string
}

export interface UserGroup {
  id: string
  name: string
  description: string
  permissions: Permission[]
}

export interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  groups: UserGroup[]
  permissions: Permission[]
  status: 'active' | 'inactive' | 'suspended'
  lastLogin?: Date
  createdAt: Date
}

export interface UserManagementState {
  users: User[]
  groups: UserGroup[]
  selectedUser?: User
  selectedGroup?: UserGroup
}
