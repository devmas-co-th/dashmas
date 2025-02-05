import { ModuleConfig } from '../types'
import { 
  Users, 
  Briefcase, 
  FileText, 
  Calendar,
  DollarSign,
  CreditCard,
  PiggyBank 
} from 'lucide-react'
import EmployeeManagement from './pages/EmployeeManagement'
import Payroll from './pages/Payroll'
import PayrollProcessing from './pages/PayrollProcessing'
import PayrollReports from './pages/PayrollReports'
import PayrollSettings from './pages/PayrollSettings'
import LeaveManagement from './pages/LeaveManagement'
import Attendance from './pages/Attendance'

const hrmsModuleConfig: ModuleConfig = {
  id: 'hrms',
  name: 'HR Management',
  description: 'Comprehensive human resource management system',
  version: '1.0.0',
  routes: [
    {
      path: '/hrms/employees',
      component: EmployeeManagement,
      name: 'Employee Management',
      icon: Users,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/payroll/overview',
      component: Payroll,
      name: 'Payroll Overview',
      icon: DollarSign,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/payroll/processing',
      component: PayrollProcessing,
      name: 'Payroll Processing',
      icon: CreditCard,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/payroll/reports',
      component: PayrollReports,
      name: 'Payroll Reports',
      icon: FileText,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/payroll/settings',
      component: PayrollSettings,
      name: 'Payroll Settings',
      icon: PiggyBank,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/leave',
      component: LeaveManagement,
      name: 'Leave Management',
      icon: Calendar,
      moduleName: 'hrms'
    },
    {
      path: '/hrms/attendance',
      component: Attendance,
      name: 'Attendance',
      icon: FileText,
      moduleName: 'hrms'
    }
  ],
  settings: [
    {
      key: 'work_hours',
      type: 'number',
      label: 'Standard Work Hours',
      defaultValue: 40
    },
    {
      key: 'leave_policy',
      type: 'select',
      label: 'Leave Policy',
      defaultValue: 'standard',
      options: [
        { value: 'standard', label: 'Standard Policy' },
        { value: 'flexible', label: 'Flexible Policy' }
      ]
    }
  ],
  permissions: [
    {
      id: 'hrms_view',
      name: 'View HR Data',
      description: 'Ability to view HR reports and employee information'
    },
    {
      id: 'hrms_manage',
      name: 'Manage HR',
      description: 'Create, edit, and delete HR records'
    }
  ]
}

export default hrmsModuleConfig
