import React, { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp,
  Users,
  CreditCard
} from 'lucide-react'

const Payroll: React.FC = () => {
  const payrollSummary = {
    totalEmployees: 50,
    totalPayroll: 250000,
    averageSalary: 5000,
    lastPayrollProcessed: 'June 2023'
  }

  const recentPayrollStats = [
    {
      title: 'Total Payroll',
      value: `$${payrollSummary.totalPayroll.toLocaleString()}`,
      icon: DollarSign,
      trend: '+5.2%'
    },
    {
      title: 'Total Employees',
      value: payrollSummary.totalEmployees.toString(),
      icon: Users,
      trend: '+3.1%'
    },
    {
      title: 'Avg. Salary',
      value: `$${payrollSummary.averageSalary.toLocaleString()}`,
      icon: CreditCard,
      trend: '+2.7%'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Payroll Overview
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {recentPayrollStats.map((stat, index) => (
          <div 
            key={index} 
            className="
              bg-white dark:bg-secondary-800 
              rounded-lg p-6 
              shadow-md 
              hover:shadow-lg 
              transition-shadow
            "
          >
            <div className="flex justify-between items-center mb-4">
              <stat.icon className="text-primary-500 w-10 h-10" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {stat.value}
            </div>
            <div className="flex items-center text-sm text-green-500 mt-2">
              <TrendingUp className="mr-2 w-4 h-4" />
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Last Payroll Processed
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {payrollSummary.lastPayrollProcessed}
          </p>
        </div>

        <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button className="
              w-full 
              bg-primary-500 
              text-white 
              py-2 
              rounded-md 
              hover:bg-primary-600 
              transition-colors
              flex items-center justify-center
            ">
              <CreditCard className="mr-2" />
              Process Payroll
            </button>
            <button className="
              w-full 
              bg-secondary-500 
              text-white 
              py-2 
              rounded-md 
              hover:bg-secondary-600 
              transition-colors
              flex items-center justify-center
            ">
              <DollarSign className="mr-2" />
              View Payroll Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payroll
