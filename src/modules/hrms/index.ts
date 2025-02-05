import ModuleManager from '../module-manager'
import hrmsModuleConfig from './config'

export function initialize() {
  const moduleManager = ModuleManager.getInstance()
  
  // Explicitly register the module
  moduleManager.registerModule(hrmsModuleConfig)
  
  // Optional: Enable the module by default
  moduleManager.enableModule('hrms', false)
}

export function uninstall() {
  const moduleManager = ModuleManager.getInstance()
  moduleManager.unregisterModule('hrms')
}
