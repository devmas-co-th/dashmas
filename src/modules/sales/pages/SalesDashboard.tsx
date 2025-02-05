import React from 'react'
import { 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Users  // Added Users import
} from 'lucide-react'

const SalesDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Sales Dashboard
      </h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Revenue
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            $45,231.89
          </div>
          <div className="flex items-center text-sm text-green-500 mt-2">
            <TrendingUp className="mr-2 w-4 h-4" />
            12.3% from last month
          </div>
        </div>
        
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Orders
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            456
          </div>
          <div className="flex items-center text-sm text-green-500 mt-2">
            <TrendingUp className="mr-2 w-4 h-4" />
            8.5% from last month
          </div>
        </div>
        
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Users className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              New Customers
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            123
          </div>
          <div className="flex items-center text-sm text-green-500 mt-2">
            <TrendingUp className="mr-2 w-4 h-4" />
            15.7% from last month
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesDashboard
