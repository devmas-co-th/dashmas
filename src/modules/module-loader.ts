import { ModuleConfig } from './types'

export async function loadModules(): Promise<ModuleConfig[]> {
  try {
    const moduleContext = import.meta.glob('../modules/*/config.ts')
    
    const modulePromises = Object.entries(moduleContext).map(async ([path, loader]) => {
      try {
        const moduleConfig = await loader()
        console.log('Loaded Module Config:', moduleConfig.default)
        return {
          ...moduleConfig.default,
          path: path
        }
      } catch (error) {
        console.error(`Error loading module from ${path}:`, error)
        return null
      }
    })

    const modules = await Promise.all(modulePromises)
    const validModules = modules.filter((module): module is ModuleConfig => module !== null)
    
    console.log('Discovered Modules:', validModules)
    return validModules
  } catch (error) {
    console.error('Critical error in module loading:', error)
    return []
  }
}

export async function initializeModules(moduleManager: any) {
  try {
    const discoveredModules = await loadModules()
    
    discoveredModules.forEach(module => {
      moduleManager.registerModule(module)
    })

    return discoveredModules
  } catch (error) {
    console.error('Module initialization failed:', error)
    return []
  }
}
