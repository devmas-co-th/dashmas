import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  UserPlus 
} from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  totalPurchases: number
  lastPurchaseDate: string
}

const CustomerManagement: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      totalPurchases: 5,
      lastPurchaseDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      totalPurchases: 3,
      lastPurchaseDate: '2023-06-10'
    }
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Customer Management
        </h1>
        <button className="
          bg-primary-500 
          text-white 
          px-4 py-2 
          rounded-lg 
          hover:bg-primary-600
          flex items-center space-x-2
        ">
          <UserPlus size={16} />
          <span>Add Customer</span>
        </button>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Customer ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Total Purchases</th>
              <th className="p-3 text-left">Last Purchase</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr 
                key={customer.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{customer.id}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.totalPurchases}</td>
                <td className="p-3">{customer.lastPurchaseDate}</td>
                <td className="p-3 text-right">
                  <div className="flex justify-end space-x-2">
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

export default CustomerManagement
