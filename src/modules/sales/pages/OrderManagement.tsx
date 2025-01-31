import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  Eye 
} from 'lucide-react'

interface Order {
  id: string
  customer: string
  total: number
  status: 'Pending' | 'Completed' | 'Cancelled'
  date: string
}

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      customer: 'John Doe',
      total: 250.75,
      status: 'Completed',
      date: '2023-06-15'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      total: 129.50,
      status: 'Pending',
      date: '2023-06-16'
    }
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Order Management
        </h1>
        <button className="
          bg-primary-500 
          text-white 
          px-4 py-2 
          rounded-lg 
          hover:bg-primary-600
        ">
          Create Order
        </button>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr 
                key={order.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">${order.total.toFixed(2)}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs
                    ${order.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      order.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                  `}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 text-right">
                  <div className="flex justify-end space-x-2">
                    <button 
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      title="View Details"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                      title="Edit"
                    >
                      <Edit size={20} />
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
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

export default OrderManagement
