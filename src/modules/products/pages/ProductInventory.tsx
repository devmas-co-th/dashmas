import React, { useState } from 'react'
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react'

interface InventoryItem {
  id: string
  productName: string
  sku: string
  currentStock: number
  minimumStock: number
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
}

const ProductInventory: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    {
      id: '1',
      productName: 'Wireless Headphones',
      sku: 'WH-001',
      currentStock: 50,
      minimumStock: 20,
      status: 'in-stock'
    },
    {
      id: '2',
      productName: 'Smart Watch',
      sku: 'SW-002',
      currentStock: 10,
      minimumStock: 20,
      status: 'low-stock'
    },
    {
      id: '3',
      productName: 'Bluetooth Speaker',
      sku: 'BS-003',
      currentStock: 0,
      minimumStock: 10,
      status: 'out-of-stock'
    }
  ])

  const getStatusIcon = (status: InventoryItem['status']) => {
    switch (status) {
      case 'in-stock':
        return <CheckCircle className="text-green-500" size={20} />
      case 'low-stock':
        return <AlertTriangle className="text-yellow-500" size={20} />
      case 'out-of-stock':
        return <AlertTriangle className="text-red-500" size={20} />
    }
  }

  const inventorySummary = {
    totalProducts: inventoryItems.length,
    inStockProducts: inventoryItems.filter(item => item.status === 'in-stock').length,
    lowStockProducts: inventoryItems.filter(item => item.status === 'low-stock').length,
    outOfStockProducts: inventoryItems.filter(item => item.status === 'out-of-stock').length
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Inventory Management
        </h1>
      </div>

      {/* Inventory Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Products
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {inventorySummary.totalProducts}
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="text-green-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              In Stock
            </span>
          </div>
          <div className="text-2xl font-bold text-green-600">
            {inventorySummary.inStockProducts}
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="text-yellow-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Low Stock
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">
            {inventorySummary.lowStockProducts}
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="text-red-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Out of Stock
            </span>
          </div>
          <div className="text-2xl font-bold text-red-600">
            {inventorySummary.outOfStockProducts}
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">SKU</th>
              <th className="p-3 text-left">Current Stock</th>
              <th className="p-3 text-left">Minimum Stock</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map(item => (
              <tr 
                key={item.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{item.productName}</td>
                <td className="p-3">{item.sku}</td>
                <td className="p-3">{item.currentStock}</td>
                <td className="p-3">{item.minimumStock}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    <span className={`
                      px-2 py-1 rounded text-xs uppercase
                      ${item.status === 'in-stock' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                        item.status === 'low-stock'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                    `}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductInventory
