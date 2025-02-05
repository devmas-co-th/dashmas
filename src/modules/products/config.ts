import { ModuleConfig } from '../types'
import { 
  Package, 
  List, 
  Grid, 
  ShoppingCart, 
  Tag, 
  BarChart2 
} from 'lucide-react'
import ProductList from './pages/ProductList'
import ProductGrid from './pages/ProductGrid'
import ProductCategories from './pages/ProductCategories'
import ProductInventory from './pages/ProductInventory'
import ProductAnalytics from './pages/ProductAnalytics'

const productsModuleConfig: ModuleConfig = {
  id: 'products',
  name: 'Product Management',
  description: 'Comprehensive product management and inventory system',
  version: '1.0.0',
  routes: [
    {
      path: '/products/list',
      component: ProductList,
      name: 'Product List',
      icon: List,
      moduleName: 'products'
    },
    {
      path: '/products/grid',
      component: ProductGrid,
      name: 'Product Grid',
      icon: Grid,
      moduleName: 'products'
    },
    {
      path: '/products/categories',
      component: ProductCategories,
      name: 'Categories',
      icon: Tag,
      moduleName: 'products'
    },
    {
      path: '/products/inventory',
      component: ProductInventory,
      name: 'Inventory',
      icon: Package,
      moduleName: 'products'
    },
    {
      path: '/products/analytics',
      component: ProductAnalytics,
      name: 'Product Analytics',
      icon: BarChart2,
      moduleName: 'products'
    }
  ],
  settings: [
    {
      key: 'low_stock_threshold',
      type: 'number',
      label: 'Low Stock Threshold',
      defaultValue: 10
    },
    {
      key: 'default_currency',
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
      id: 'products_view',
      name: 'View Products',
      description: 'Ability to view product information'
    },
    {
      id: 'products_manage',
      name: 'Manage Products',
      description: 'Create, edit, and delete product records'
    }
  ]
}

export default productsModuleConfig
