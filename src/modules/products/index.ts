import ModuleManager from '../module-manager'
import productsModuleConfig from './config'

export function initialize() {
  const moduleManager = ModuleManager.getInstance()
  
  // Explicitly register the module
  moduleManager.registerModule(productsModuleConfig)
  
  // Optional: Enable the module by default
  moduleManager.enableModule('products', false)
}

export function uninstall() {
  const moduleManager = ModuleManager.getInstance()
  moduleManager.unregisterModule('products')
}
