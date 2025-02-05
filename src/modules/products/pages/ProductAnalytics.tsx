import React from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Package 
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const ProductAnalytics: React.FC = () => {
  const salesData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 }
  ]

  const productSummary = {
    totalRevenue: 45678,
    totalSales: 456,
    averageOrderValue: 100.17,
    topSellingProduct: 'Wireless Headphones'
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Product Analytics
        </h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Revenue
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            ${productSummary.totalRevenue.toLocaleString()}
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
              Total Sales
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {productSummary.totalSales}
          </div>
          <div className="flex items-center text-sm text-green-500 mt-2">
            <TrendingUp className="mr-2 w-4 h-4" />
            8.5% from last month
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Avg. Order Value
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            ${productSummary.averageOrderValue.toFixed(2)}
          </div>
          <div className="flex items-center text-sm text-green-500 mt-2">
            <TrendingUp className="mr-2 w-4 h-4" />
            5.7% from last month
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-primary-500 w-10 h-10" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Top Selling Product
            </span>
          </div>
          <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {productSummary.topSellingProduct}
          </div>
        </div>
      </div>

      {/* Sales and Revenue Charts */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Monthly Sales
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="currentColor" 
                className="text-gray-200 dark:text-gray-700"
              />
              <XAxis 
                dataKey="name" 
                stroke="currentColor" 
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis 
                stroke="currentColor" 
                className="text-gray-600 dark:text-gray-400"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'currentColor', 
                  color: 'currentColor' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#8884d8" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Monthly Revenue
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="currentColor" 
                className="text-gray-200 dark:text-gray-700"
              />
              <XAxis 
                dataKey="name" 
                stroke="currentColor" 
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis 
                stroke="currentColor" 
                className="text-gray-600 dark:text-gray-400"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'currentColor', 
                  color: 'currentColor' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#82ca9d" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ProductAnalytics
