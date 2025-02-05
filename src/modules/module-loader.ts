import { ModuleConfig } from './types'

export async function loadModules(): Promise<ModuleConfig[]> {
  try {
    // Use Vite's import.meta.glob to dynamically import module configs
    const moduleContext = import.meta.glob('../modules/*/config.ts')
    
    const modulePromises = Object.entries(moduleContext).map(async ([path, loader]) => {
      try {
        const moduleConfig = await loader()
        
        // Validate module configuration
        if (!moduleConfig.default || !moduleConfig.default.id) {
          console.warn(`Invalid module configuration in ${path}`)
          return null
        }

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
    
    // Filter out null/invalid modules
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
    // Explicitly import HRMS module
    const hrmsModule = await import('./hrms')
    
    // Initialize HRMS module
    hrmsModule.initialize()

    // Load discovered modules
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
