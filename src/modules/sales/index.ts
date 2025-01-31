import ModuleManager from '../module-manager'
import salesModuleConfig from './config'

export function initialize() {
  const moduleManager = ModuleManager.getInstance()
  moduleManager.registerModule(salesModuleConfig)
}

export function uninstall() {
  const moduleManager = ModuleManager.getInstance()
  moduleManager.unregisterModule('sales')
}
