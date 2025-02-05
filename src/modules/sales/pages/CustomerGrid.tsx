import React from 'react'

const CustomerGrid: React.FC = () => {
  const customers = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', purchases: 5 },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', purchases: 3 },
    { id: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', purchases: 2 }
  ]

  return (
    <div className="p-4 bg-white dark:bg-secondary-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Customer Grid View
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {customers.map(customer => (
          <div 
            key={customer.id} 
            className="
              bg-gray-100 dark:bg-secondary-700 
              p-4 rounded-lg 
              shadow-sm hover:shadow-md 
              transition-shadow
            "
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {customer.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {customer.email}
            </p>
            <div className="mt-2 text-sm">
              <span className="font-medium">Total Purchases:</span> {customer.purchases}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerGrid
