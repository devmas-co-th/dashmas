import { ModuleConfig } from './types'

class ModuleManager {
  private static instance: ModuleManager
  private modules: Map<string, ModuleConfig> = new Map()

  private constructor() {}

  public static getInstance(): ModuleManager {
    if (!ModuleManager.instance) {
      ModuleManager.instance = new ModuleManager()
    }
    return ModuleManager.instance
  }

  registerModule(module: ModuleConfig) {
    if (this.modules.has(module.id)) {
      console.warn(`Module ${module.id} already registered`)
      return
    }
    this.modules.set(module.id, module)
  }

  getModule(moduleId: string): ModuleConfig | undefined {
    return this.modules.get(moduleId)
  }

  getLoadedModules(): ModuleConfig[] {
    return Array.from(this.modules.values())
  }

  getAllModules(): ModuleConfig[] {
    return Array.from(this.modules.values())
  }

  unregisterModule(moduleId: string) {
    this.modules.delete(moduleId)
  }
}

export default ModuleManager
