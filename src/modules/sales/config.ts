import { ModuleConfig } from '../types'
import { 
  ShoppingCart, 
  DollarSign, 
  Users 
} from 'lucide-react'
import SalesDashboard from './pages/SalesDashboard'
import OrderManagement from './pages/OrderManagement'
import CustomerManagement from './pages/CustomerManagement'

const salesModuleConfig: ModuleConfig = {
  id: 'sales',
  name: 'Sales Management',
  description: 'Comprehensive sales tracking and management',
  version: '1.0.0',
  routes: [
    {
      path: '/sales/dashboard',
      component: SalesDashboard,
      name: 'Sales Dashboard',
      icon: DollarSign,
      moduleName: 'sales'
    },
    {
      path: '/sales/orders',
      component: OrderManagement,
      name: 'Orders',
      icon: ShoppingCart,
      moduleName: 'sales'
    },
    {
      path: '/sales/customers',
      component: CustomerManagement,
      name: 'Customers',
      icon: Users,
      moduleName: 'sales'
    }
  ],
  settings: [
    {
      key: 'tax_rate',
      type: 'number',
      label: 'Default Tax Rate',
      defaultValue: 0.1
    },
    {
      key: 'currency',
      type: 'select',
      label: 'Default Currency',
      defaultValue: 'USD',
      options: [
        { value: 'USD', label: 'US Dollar' },
        { value: 'EUR', label: 'Euro' },
        { value: 'THB', label: 'Thai Baht' }
      ]
    }
  ],
  permissions: [
    {
      id: 'sales_view',
      name: 'View Sales Data',
      description: 'Ability to view sales reports and dashboards'
    },
    {
      id: 'sales_manage',
      name: 'Manage Sales',
      description: 'Create, edit, and delete sales records'
    }
  ]
}

export default salesModuleConfig
