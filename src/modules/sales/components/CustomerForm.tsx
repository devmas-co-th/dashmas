import React, { useState } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard 
} from 'lucide-react'

interface CustomerFormProps {
  onSubmit: (customerData: any) => void
  initialData?: any
}

const CustomerForm: React.FC<CustomerFormProps> = ({ 
  onSubmit, 
  initialData = {} 
}) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    address: initialData.address || '',
    customerType: initialData.customerType || 'individual'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="firstName" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            First Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter first name"
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="lastName" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Last Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter last name"
            />
          </div>
        </div>
      </div>

      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="text-gray-400 dark:text-gray-500" size={20} />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full pl-10 pr-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
            placeholder="Enter email address"
          />
        </div>
      </div>

      <div>
        <label 
          htmlFor="phone" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="text-gray-400 dark:text-gray-500" size={20} />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="
              w-full pl-10 pr-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div>
        <label 
          htmlFor="address" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="text-gray-400 dark:text-gray-500" size={20} />
          </div>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="
              w-full pl-10 pr-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
            placeholder="Enter address"
          />
        </div>
      </div>

      <div>
        <label 
          htmlFor="customerType" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Customer Type
        </label>
        <select
          id="customerType"
          name="customerType"
          value={formData.customerType}
          onChange={handleChange}
          className="
            w-full px-3 py-2 
            border border-gray-300 dark:border-secondary-700
            rounded-md 
            bg-white dark:bg-secondary-900
            text-gray-900 dark:text-gray-200
            focus:ring-primary-500 focus:border-primary-500
          "
        >
          <option value="individual">Individual</option>
          <option value="business">Business</option>
          <option value="wholesale">Wholesale</option>
        </select>
      </div>

      <div className="pt-6 border-t dark:border-secondary-700">
        <button
          type="submit"
          className="
            w-full bg-primary-500 text-white 
            py-2 rounded-md 
            hover:bg-primary-600 
            transition-colors
            flex items-center justify-center
            space-x-2
          "
        >
          <CreditCard className="mr-2" size={20} />
          Save Customer
        </button>
      </div>
    </form>
  )
}

export default CustomerForm
