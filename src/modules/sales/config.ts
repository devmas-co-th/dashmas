import { ModuleConfig } from '../types'
import { 
  ShoppingCart, 
  DollarSign, 
  Users,
  List,
  Grid 
} from 'lucide-react'
import SalesDashboard from './pages/SalesDashboard'
import OrderManagement from './pages/OrderManagement'
import CustomerManagement from './pages/CustomerManagement'

// Customer List and Grid Views for Tabs
import CustomerList from './pages/CustomerList'
import CustomerGrid from './pages/CustomerGrid'

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
  // New pageTabs configuration
  pageTabs: [
    {
      id: 'customer_list',
      page: 'CustomerManagement',
      label: 'List View',
      component: CustomerList,
      icon: List
    },
    {
      id: 'customer_grid',
      page: 'CustomerManagement',
      label: 'Grid View',
      component: CustomerGrid,
      icon: Grid
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
