import React from 'react'
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity 
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const cardData = [
    { 
      title: 'Total Users', 
      value: '1,234', 
      icon: Users, 
      color: 'bg-blue-500' 
    },
    { 
      title: 'Revenue', 
      value: '$45,678', 
      icon: DollarSign, 
      color: 'bg-green-500' 
    },
    { 
      title: 'Orders', 
      value: '456', 
      icon: ShoppingCart, 
      color: 'bg-purple-500' 
    },
    { 
      title: 'Growth', 
      value: '12.5%', 
      icon: Activity, 
      color: 'bg-orange-500' 
    }
  ]

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 dark:text-gray-200">Dashboard Overview</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className={`
              ${card.color} text-white 
              p-4 rounded-lg shadow-md 
              flex items-center flex-col md:flex-row
              dark:opacity-80
            `}
          >
            <card.icon className="mb-2 md:mb-0 md:mr-4" size={30} />
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm opacity-75">{card.title}</p>
              <h2 className="text-lg md:text-2xl font-bold">{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">Recent Activity</h3>
          <p className="text-gray-600 dark:text-gray-400">No recent activities</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">Quick Stats</h3>
          <p className="text-gray-600 dark:text-gray-400">No stats available</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
