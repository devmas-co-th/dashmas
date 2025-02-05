
import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  UserPlus 
} from 'lucide-react'
import Tab from '../../../components/Tab'
import SlidePanel from '../../../components/SlidePanel'
import CustomerForm from '../components/CustomerForm'

const CustomerManagement: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleAddCustomer = (customerData: any) => {
    // TODO: Implement actual customer creation logic
    console.log('New Customer:', customerData)
    setIsPanelOpen(false)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Customer Management
        </h1>
        <button 
          onClick={() => setIsPanelOpen(true)}
          className="
            bg-primary-500 
            text-white 
            px-4 py-2 
            rounded-lg 
            hover:bg-primary-600
            flex items-center space-x-2
          "
        >
          <UserPlus size={16} />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Dynamic Tab Component */}
      <Tab 
        moduleId="sales" 
        pageName="CustomerManagement" 
      />

      {/* Slide Panel for Add Customer */}
      <SlidePanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title="Add New Customer"
        size="wide"
      >
        <CustomerForm 
          onSubmit={handleAddCustomer}
        />
      </SlidePanel>
    </div>
  )
}

export default CustomerManagement
