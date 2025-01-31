import React from 'react'

export interface ModuleConfig {
  id: string
  name: string
  description: string
  version: string
  routes: ModuleRoute[]
  settings?: ModuleSetting[]
  permissions?: ModulePermission[]
  icon?: React.ElementType
}

export interface ModuleRoute {
  path: string
  component: React.ComponentType
  name: string
  icon?: React.ElementType
  moduleName: string
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

export interface ModuleManagerInterface {
  registerModule(module: ModuleConfig): void
  enableModule(moduleId: string): void
  disableModule(moduleId: string): void
  getEnabledModules(): ModuleConfig[]
  getAllModules(): ModuleConfig[]
  initializeSystemModules(): Promise<void>
}
