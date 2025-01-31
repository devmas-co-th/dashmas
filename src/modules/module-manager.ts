import { ModuleConfig, ModuleManagerInterface } from './types'
import { loadModules } from './module-loader'

class ModuleManager implements ModuleManagerInterface {
  private static instance: ModuleManager
  private modules: Map<string, ModuleConfig> = new Map()
  private enabledModules: Map<string, ModuleConfig> = new Map()

  private constructor() {
    this.loadPersistedModules()
  }

  public static getInstance(): ModuleManager {
    if (!ModuleManager.instance) {
      ModuleManager.instance = new ModuleManager()
    }
    return ModuleManager.instance
  }

  private loadPersistedModules() {
    try {
      // Load all modules first
      const savedModules = localStorage.getItem('registeredModules')
      const savedEnabledModules = localStorage.getItem('enabledModules')

      if (savedModules) {
        const moduleIds = JSON.parse(savedModules)
        moduleIds.forEach(moduleId => {
          // Dynamically import and register modules
          import(`../${moduleId}/config.ts`)
            .then(moduleConfig => {
              this.registerModule(moduleConfig.default)
            })
            .catch(error => {
              console.error(`Failed to load module ${moduleId}:`, error)
            })
        })
      }

      // Restore enabled modules
      if (savedEnabledModules) {
        const enabledModuleIds = JSON.parse(savedEnabledModules)
        enabledModuleIds.forEach(moduleId => {
          const module = this.modules.get(moduleId)
          if (module) {
            this.enabledModules.set(moduleId, module)
          }
        })
      }
    } catch (error) {
      console.error('Error loading persisted modules:', error)
    }
  }

  async initializeSystemModules() {
    try {
      // Load all modules from the modules directory
      const discoveredModules = await loadModules()
      
      // Register all discovered modules
      discoveredModules.forEach(module => {
        this.registerModule(module)
      })

      // Persist registered module IDs
      const moduleIds = discoveredModules.map(module => module.id)
      localStorage.setItem('registeredModules', JSON.stringify(moduleIds))
    } catch (error) {
      console.error('System module initialization failed:', error)
    }
  }

  registerModule(module: ModuleConfig): void {
    if (this.modules.has(module.id)) {
      console.log(`Module ${module.id} already registered`)
      return
    }
    this.modules.set(module.id, module)
  }

  enableModule(moduleId: string): void {
    const module = this.modules.get(moduleId)
    if (module) {
      this.enabledModules.set(moduleId, module)
      this.saveEnabledModules()
    }
  }

  disableModule(moduleId: string): void {
    this.enabledModules.delete(moduleId)
    this.saveEnabledModules()
  }

  private saveEnabledModules(): void {
    try {
      const enabledModuleIds = Array.from(this.enabledModules.keys())
      localStorage.setItem('enabledModules', JSON.stringify(enabledModuleIds))
    } catch (error) {
      console.error('Error saving enabled modules:', error)
    }
  }

  getEnabledModules(): ModuleConfig[] {
    return Array.from(this.enabledModules.values())
  }

  getAllModules(): ModuleConfig[] {
    return Array.from(this.modules.values())
  }

  unregisterModule(moduleId: string): void {
    this.modules.delete(moduleId)
    this.enabledModules.delete(moduleId)
  }
}

export default ModuleManager
