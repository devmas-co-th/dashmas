import React, { useState } from 'react'
import { 
  Calendar, 
  CheckCircle, 
  XCircle 
} from 'lucide-react'

interface LeaveRequest {
  id: string
  employeeName: string
  startDate: string
  endDate: string
  type: 'vacation' | 'sick' | 'personal'
  status: 'pending' | 'approved' | 'rejected'
}

const LeaveManagement: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: '1',
      employeeName: 'John Doe',
      startDate: '2023-07-15',
      endDate: '2023-07-22',
      type: 'vacation',
      status: 'pending'
    },
    {
      id: '2',
      employeeName: 'Jane Smith',
      startDate: '2023-06-25',
      endDate: '2023-06-27',
      type: 'sick',
      status: 'approved'
    }
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Leave Management
        </h1>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">End Date</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(request => (
              <tr 
                key={request.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{request.employeeName}</td>
                <td className="p-3">{request.startDate}</td>
                <td className="p-3">{request.endDate}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs uppercase
                    ${request.type === 'vacation' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 
                      request.type === 'sick'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}
                  `}>
                    {request.type}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs
                    flex items-center space-x-2
                    ${request.status === 'approved' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      request.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                  `}>
                    {request.status === 'approved' && <CheckCircle size={16} />}
                    {request.status === 'pending' && <Calendar size={16} />}
                    {request.status === 'rejected' && <XCircle size={16} />}
                    <span className="ml-2">{request.status}</span>
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

export default LeaveManagement
