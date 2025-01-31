import React from 'react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const Analytics: React.FC = () => {
  const data = [
    { name: 'Jan', users: 400, revenue: 240 },
    { name: 'Feb', users: 300, revenue: 139 },
    { name: 'Mar', users: 200, revenue: 980 },
    { name: 'Apr', users: 278, revenue: 390 },
    { name: 'May', users: 189, revenue: 480 },
    { name: 'Jun', users: 239, revenue: 380 }
  ]

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 dark:text-gray-200">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
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
                dataKey="users" 
                stroke="#8884d8" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
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

export default Analytics
