
import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  PlusCircle, 
  Tag 
} from 'lucide-react'

interface Category {
  id: string
  name: string
  description: string
  productCount: number
}

const ProductCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Electronics',
      description: 'All electronic devices and accessories',
      productCount: 15
    },
    {
      id: '2',
      name: 'Clothing',
      description: 'Apparel and fashion items',
      productCount: 20
    }
  ])

  const [newCategory, setNewCategory] = useState({
    name: '',
    description: ''
  })

  const handleAddCategory = () => {
    if (!newCategory.name) return

    const category: Category = {
      id: String(categories.length + 1),
      ...newCategory,
      productCount: 0
    }

    setCategories([...categories, category])
    setNewCategory({ name: '', description: '' })
  }

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(cat => cat.id !== categoryId))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Product Categories
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category List */}
        <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-secondary-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Products</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr 
                  key={category.id} 
                  className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
                >
                  <td className="p-3">{category.name}</td>
                                    <td className="p-3">{category.description}</td>
                  <td className="p-3">
                    <span className="
                      px-2 py-1 rounded text-xs
                      bg-primary-100 text-primary-800
                      dark:bg-primary-900 dark:text-primary-300
                    ">
                      {category.productCount}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDeleteCategory(category.id)}
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

        {/* Add Category Form */}
        <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Add New Category
          </h2>
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="categoryName" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Category Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tag className="text-gray-400 dark:text-gray-500" size={20} />
                </div>
                <input
                  type="text"
                  id="categoryName"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory(prev => ({
                    ...prev,
                    name: e.target.value
                  }))}
                  className="
                    w-full pl-10 pr-3 py-2 
                    border border-gray-300 dark:border-secondary-700
                    rounded-md 
                    bg-white dark:bg-secondary-900
                    text-gray-900 dark:text-gray-200
                    focus:ring-primary-500 focus:border-primary-500
                  "
                  placeholder="Enter category name"
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="categoryDescription" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Description
              </label>
              <textarea
                id="categoryDescription"
                value={newCategory.description}
                onChange={(e) => setNewCategory(prev => ({
                  ...prev,
                  description: e.target.value
                }))}
                rows={4}
                className="
                  w-full px-3 py-2 
                  border border-gray-300 dark:border-secondary-700
                  rounded-md 
                  bg-white dark:bg-secondary-900
                  text-gray-900 dark:text-gray-200
                  focus:ring-primary-500 focus:border-primary-500
                "
                placeholder="Enter category description"
              />
            </div>

            <button
              onClick={handleAddCategory}
              className="
                w-full bg-primary-500 text-white 
                py-2 rounded-md 
                hover:bg-primary-600 
                transition-colors
                flex items-center justify-center
                space-x-2
              "
            >
              <PlusCircle className="mr-2" size={20} />
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategories
