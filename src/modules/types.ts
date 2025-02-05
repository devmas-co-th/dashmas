// Add this to the existing types.ts file
export interface PageTab {
  id: string
  page: string
  label: string
  component: React.ComponentType
  icon?: React.ElementType
}

// Update ModuleConfig interface to include pageTabs
export interface ModuleConfig {
  id: string
  name: string
  description: string
  version: string
  routes: ModuleRoute[]
  settings?: ModuleSetting[]
  permissions?: ModulePermission[]
  icon?: React.ElementType
  pageTabs?: PageTab[]  // New optional property
}
