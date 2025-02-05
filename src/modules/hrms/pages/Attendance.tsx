import React, { useState } from 'react'
import { 
  Clock, 
  CheckCircle, 
  XCircle 
} from 'lucide-react'

interface AttendanceRecord {
  id: string
  employeeName: string
  date: string
  checkIn: string
  checkOut: string
  status: 'present' | 'absent' | 'late'
}

const Attendance: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: '1',
      employeeName: 'John Doe',
      date: '2023-06-20',
      checkIn: '08:45',
      checkOut: '17:30',
      status: 'present'
    },
    {
      id: '2',
      employeeName: 'Jane Smith',
      date: '2023-06-20',
      checkIn: '09:15',
      checkOut: '17:00',
      status: 'late'
    }
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Attendance Management
        </h1>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Check In</th>
              <th className="p-3 text-left">Check Out</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map(record => (
              <tr 
                key={record.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{record.employeeName}</td>
                <td className="p-3">{record.date}</td>
                <td className="p-3">{record.checkIn}</td>
                <td className="p-3">{record.checkOut}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs
                    flex items-center space-x-2
                    ${record.status === 'present' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      record.status === 'late'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                  `}>
                    {record.status === 'present' && <CheckCircle size={16} />}
                    {record.status === 'late' && <Clock size={16} />}
                    {record.status === 'absent' && <XCircle size={16} />}
                    <span className="ml-2">{record.status}</span>
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

export default Attendance
