export interface ModuleConfig {
  id: string
  name: string
  description: string
  version: string
  routes?: ModuleRoute[]
  settings?: ModuleSetting[]
  permissions?: ModulePermission[]
}

export interface ModuleRoute {
  path: string
  component: React.ComponentType
  name: string
  icon?: React.ElementType
}

export interface ModuleSetting {
  key: string
  type: 'boolean' | 'string' | 'number' | 'select'
  label: string
  defaultValue: any
  options?: { value: string, label: string }[]
}

export interface ModulePermission {
  id: string
  name: string
  description: string
}
