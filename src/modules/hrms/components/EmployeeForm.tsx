import React, { useState, useEffect } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Calendar, 
  Save 
} from 'lucide-react'

interface EmployeeFormProps {
  onSubmit: (employeeData: any) => void
  initialData?: any | null
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ 
  onSubmit, 
  initialData = null 
}) => {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    department: initialData?.department || '',
    position: initialData?.position || '',
    hireDate: initialData?.hireDate || '',
    employmentType: initialData?.employmentType || 'full-time'
  })

  // Update form data if initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        department: initialData.department || '',
        position: initialData.position || '',
        hireDate: initialData.hireDate || '',
        employmentType: initialData.employmentType || 'full-time'
      })
    }
  }, [initialData])

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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="department" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Department
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter department"
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="position" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Position
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter position"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="hireDate" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Hire Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="date"
              id="hireDate"
              name="hireDate"
              value={formData.hireDate}
              onChange={handleChange}
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="employmentType" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
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
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>
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
          <Save className="mr-2" size={20} />
          Save Employee
        </button>
      </div>
    </form>
  )
}

export default EmployeeForm
