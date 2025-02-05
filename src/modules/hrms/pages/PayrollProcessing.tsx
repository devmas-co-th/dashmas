import React, { useState } from 'react'
import { 
  CreditCard, 
  FileText, 
  DollarSign 
} from 'lucide-react'

interface PayrollProcessingRecord {
  id: string
  employeeName: string
  department: string
  grossSalary: number
  netPay: number
  status: 'pending' | 'processed' | 'error'
}

const PayrollProcessing: React.FC = () => {
  const [processingRecords, setProcessingRecords] = useState<PayrollProcessingRecord[]>([
    {
      id: '1',
      employeeName: 'John Doe',
      department: 'Engineering',
      grossSalary: 6000,
      netPay: 5500,
      status: 'pending'
    },
    {
      id: '2',
      employeeName: 'Jane Smith',
      department: 'Marketing',
      grossSalary: 5500,
      netPay: 5000,
      status: 'processed'
    }
  ])

  const processPayroll = () => {
    // Simulate payroll processing
    const updatedRecords = processingRecords.map(record => ({
      ...record,
      status: 'processed'
    }))
    setProcessingRecords(updatedRecords)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Payroll Processing
        </h1>
        <button 
          onClick={processPayroll}
          className="
            bg-primary-500 
            text-white 
            px-4 py-2 
            rounded-lg 
            hover:bg-primary-600
            flex items-center space-x-2
          "
        >
          <CreditCard size={16} />
          <span>Process Payroll</span>
        </button>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Gross Salary</th>
              <th className="p-3 text-left">Net Pay</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {processingRecords.map(record => (
              <tr 
                key={record.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{record.employeeName}</td>
                <td className="p-3">{record.department}</td>
                <td className="p-3">
                  <span className="flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    {record.grossSalary.toLocaleString()}
                  </span>
                </td>
                <td className="p-3">
                  <span className="flex items-center font-bold">
                    <DollarSign size={16} className="mr-1" />
                    {record.netPay.toLocaleString()}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs
                    ${record.status === 'processed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      record.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                  `}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PayrollProcessing
