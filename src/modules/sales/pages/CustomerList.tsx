import React from 'react'

const CustomerList: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-secondary-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Customer List View
      </h2>
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-secondary-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Total Purchases</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-secondary-700">
            <td className="p-3">John Doe</td>
            <td className="p-3">john.doe@example.com</td>
            <td className="p-3">5</td>
          </tr>
          <tr className="border-b dark:border-secondary-700">
            <td className="p-3">Jane Smith</td>
            <td className="p-3">jane.smith@example.com</td>
            <td className="p-3">3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
