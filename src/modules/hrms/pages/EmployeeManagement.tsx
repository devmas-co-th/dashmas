import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  UserPlus 
} from 'lucide-react'
import SlidePanel from '../../../components/SlidePanel'
import EmployeeForm from '../components/EmployeeForm'

const EmployeeManagement: React.FC = () => {
  const [employees, setEmployees] = useState([
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      department: 'Engineering',
      position: 'Software Engineer'
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      department: 'Marketing',
      position: 'Marketing Manager'
    }
  ])

  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null)

  const handleAddEmployee = (employeeData: any) => {
    // TODO: Implement actual employee creation logic
    const newEmployee = {
      ...employeeData,
      id: String(employees.length + 1)
    }
    setEmployees([...employees, newEmployee])
    setIsPanelOpen(false)
  }

  const handleEditEmployee = (employeeData: any) => {
    // TODO: Implement actual employee update logic
    const updatedEmployees = employees.map(emp => 
      emp.id === selectedEmployee.id ? { ...emp, ...employeeData } : emp
    )
    setEmployees(updatedEmployees)
    setIsPanelOpen(false)
    setSelectedEmployee(null)
  }

  const handleDeleteEmployee = (employeeId: string) => {
    // TODO: Implement actual employee deletion logic
    setEmployees(employees.filter(emp => emp.id !== employeeId))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Employee Management
        </h1>
        <button 
          onClick={() => {
            setSelectedEmployee(null)
            setIsPanelOpen(true)
          }}
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
          <span>Add Employee</span>
        </button>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr 
                key={employee.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{employee.firstName} {employee.lastName}</td>
                <td className="p-3">{employee.email}</td>
                <td className="p-3">{employee.department}</td>
                <td className="p-3">{employee.position}</td>
                <td className="p-3 text-right">
                  <div className="flex justify-end space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedEmployee(employee)
                        setIsPanelOpen(true)
                      }}
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Edit size={20} />
                    </button>
                    <button 
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SlidePanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={selectedEmployee ? "Edit Employee" : "Add New Employee"}
        size="wide"
      >
        <EmployeeForm 
          onSubmit={selectedEmployee ? handleEditEmployee : handleAddEmployee}
          initialData={selectedEmployee}
        />
      </SlidePanel>
    </div>
  )
}

export default EmployeeManagement
