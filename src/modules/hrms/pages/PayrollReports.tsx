import React, { useState } from 'react'
import { 
  FileText, 
  Download, 
  Calendar 
} from 'lucide-react'

interface PayrollReport {
  id: string
  month: string
  year: number
  totalPayroll: number
  employeeCount: number
  reportType: 'monthly' | 'quarterly' | 'annual'
}

const PayrollReports: React.FC = () => {
  const [reports, setReports] = useState<PayrollReport[]>([
    {
      id: '1',
      month: 'June',
      year: 2023,
      totalPayroll: 250000,
      employeeCount: 50,
      reportType: 'monthly'
    },
    {
      id: '2',
      month: 'Q2',
      year: 2023,
      totalPayroll: 750000,
      employeeCount: 50,
      reportType: 'quarterly'
    }
  ])

  const downloadReport = (report: PayrollReport) => {
    // Simulate report download
    console.log('Downloading report:', report)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Payroll Reports
        </h1>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Period</th>
              <th className="p-3 text-left">Report Type</th>
              <th className="p-3 text-left">Total Payroll</th>
              <th className="p-3 text-left">Employees</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr 
                key={report.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-gray-500" size={16} />
                    {report.month} {report.year}
                  </div>
                </td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs uppercase
                    ${report.reportType === 'monthly' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 
                      report.reportType === 'quarterly'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'}
                  `}>
                    {report.reportType}
                  </span>
                </td>
                <td className="p-3">
                  <span className="flex items-center">
                    $
                    {report.totalPayroll.toLocaleString()}
                  </span>
                </td>
                <td className="p-3">{report.employeeCount}</td>
                <td className="p-3 text-right">
                  <button 
                    onClick={() => downloadReport(report)}
                    className="
                      text-primary-500 
                      hover:text-primary-700 
                      dark:text-primary-400 
                      dark:hover:text-primary-300
                      flex items-center
                    "
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PayrollReports
