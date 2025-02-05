import { ModuleConfig, ModuleManagerInterface } from './types'
import { loadModules } from './module-loader'

class ModuleManager implements ModuleManagerInterface {
  private static instance: ModuleManager
  private modules: Map<string, ModuleConfig> = new Map()
  private enabledModules: Map<string, ModuleConfig> = new Map()

  private constructor() {
    this.initializeModuleState()
  }

  public static getInstance(): ModuleManager {
    if (!ModuleManager.instance) {
      ModuleManager.instance = new ModuleManager()
    }
    return ModuleManager.instance
  }

  private async initializeModuleState() {
    try {
      // Load all discovered modules first
      const discoveredModules = await loadModules()
      
      // Register all discovered modules
      discoveredModules.forEach(module => {
        this.registerModule(module)
      })

      // Persist registered module IDs
      const moduleIds = discoveredModules.map(module => module.id)
      localStorage.setItem('registeredModules', JSON.stringify(moduleIds))

      // Restore enabled modules from localStorage
      this.restoreEnabledModules(discoveredModules)
    } catch (error) {
      console.error('Module initialization failed:', error)
    }
  }

  private restoreEnabledModules(discoveredModules: ModuleConfig[]) {
    try {
      // Get previously enabled modules from localStorage
      const savedEnabledModules = localStorage.getItem('enabledModules')

      if (savedEnabledModules) {
        const enabledModuleIds = JSON.parse(savedEnabledModules)

        // Find and enable modules that were previously enabled
        enabledModuleIds.forEach(moduleId => {
          const moduleToEnable = discoveredModules.find(module => module.id === moduleId)
          
          if (moduleToEnable) {
            // Explicitly enable the module
            this.enableModule(moduleId, false)
          }
        })

        // Dispatch event after initial restoration
        this.dispatchModuleStatusChangeEvent()
      }
    } catch (error) {
      console.error('Error restoring enabled modules:', error)
    }
  }

  registerModule(module: ModuleConfig): void {
    if (this.modules.has(module.id)) {
      console.log(`Module ${module.id} already registered`)
      return
    }
    this.modules.set(module.id, module)
  }

  enableModule(moduleId: string, shouldDispatchEvent: boolean = true): void {
    const module = this.modules.get(moduleId)
    if (module) {
      this.enabledModules.set(moduleId, module)
      this.saveEnabledModules()
      
      if (shouldDispatchEvent) {
        this.dispatchModuleStatusChangeEvent()
      }
    }
  }

  disableModule(moduleId: string): void {
    this.enabledModules.delete(moduleId)
    this.saveEnabledModules()
    this.dispatchModuleStatusChangeEvent()
  }

  private saveEnabledModules(): void {
    try {
      const enabledModuleIds = Array.from(this.enabledModules.keys())
      localStorage.setItem('enabledModules', JSON.stringify(enabledModuleIds))
    } catch (error) {
      console.error('Error saving enabled modules:', error)
    }
  }

  private dispatchModuleStatusChangeEvent(): void {
    const event = new Event('moduleStatusChanged')
    window.dispatchEvent(event)
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
    this.saveEnabledModules()
    this.dispatchModuleStatusChangeEvent()
  }
}

export default ModuleManager
