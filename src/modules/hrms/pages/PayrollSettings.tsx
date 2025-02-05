import React, { useState } from 'react'
import { 
  Settings, 
  DollarSign, 
  Calendar, 
  Save 
} from 'lucide-react'

const PayrollSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    payPeriod: 'monthly',
    defaultTaxRate: 0.2,
    currency: 'USD',
    paymentMethod: 'bank_transfer'
  })

  const handleSettingChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const saveSettings = () => {
    // Simulate saving settings
    console.log('Saving Payroll Settings:', settings)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Payroll Settings
        </h1>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6 space-y-6">
        <div>
          <label 
            htmlFor="payPeriod" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <Calendar className="inline-block mr-2 text-gray-500" size={16} />
            Pay Period
          </label>
          <select
            id="payPeriod"
            name="payPeriod"
            value={settings.payPeriod}
            onChange={handleSettingChange}
            className="
              w-full px-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
          >
            <option value="monthly">Monthly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div>
          <label 
            htmlFor="defaultTaxRate" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <DollarSign className="inline-block mr-2 text-gray-500" size={16} />
            Default Tax Rate
          </label>
          <input
            type="number"
            id="defaultTaxRate"
            name="defaultTaxRate"
            value={settings.defaultTaxRate}
            onChange={handleSettingChange}
            step="0.01"
            min="0"
            max="1"
            className="
              w-full px-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
          />
        </div>

        <div>
          <label 
            htmlFor="currency" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <DollarSign className="inline-block mr-2 text-gray-500" size={16} />
            Default Currency
          </label>
          <select
            id="currency"
            name="currency"
            value={settings.currency}
            onChange={handleSettingChange}
            className="
              w-full px-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
        </div>

        <div>
          <label 
            htmlFor="paymentMethod" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <Settings className="inline-block mr-2 text-gray-500" size={16} />
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={settings.paymentMethod}
            onChange={handleSettingChange}
            className="
              w-full px-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
          >
            <option value="bank_transfer">Bank Transfer</option>
            <option value="direct_deposit">Direct Deposit</option>
            <option value="check">Check</option>
          </select>
        </div>

        <div className="pt-4">
          <button 
            onClick={saveSettings}
            className="
              w-full bg-primary-500 text-white 
              py-2 rounded-md 
              hover:bg-primary-600 
              transition-colors
              flex items-center justify-center
              space-x-2
            "
          >
            <Save className="mr-2" size={20} />
            Save Payroll Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default PayrollSettings
