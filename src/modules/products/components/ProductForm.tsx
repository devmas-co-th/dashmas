import React, { useState, useEffect } from 'react'
import { 
  Package, 
  DollarSign, 
  Tag, 
  Image, 
  Save, 
  List 
} from 'lucide-react'

interface ProductFormProps {
  onSubmit: (productData: any) => void
  initialData?: any | null
}

const ProductForm: React.FC<ProductFormProps> = ({ 
  onSubmit, 
  initialData = null 
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    sku: initialData?.sku || '',
    price: initialData?.price || 0,
    category: initialData?.category || '',
    description: initialData?.description || '',
    stockQuantity: initialData?.stockQuantity || 0,
    imageUrl: initialData?.imageUrl || '',
    status: initialData?.status || 'active'
  })

  // Update form data if initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        sku: initialData.sku || '',
        price: initialData.price || 0,
        category: initialData.category || '',
        description: initialData.description || '',
        stockQuantity: initialData.stockQuantity || 0,
        imageUrl: initialData.imageUrl || '',
        status: initialData.status || 'active'
      })
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stockQuantity' ? Number(value) : value
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
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Product Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Package className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              placeholder="Enter product name"
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="sku" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            SKU
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <List className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
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
              placeholder="Enter SKU"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="price" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Price
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter price"
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="category" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Tag className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter category"
            />
          </div>
        </div>
      </div>

      <div>
        <label 
          htmlFor="description" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="
            w-full px-3 py-2 
            border border-gray-300 dark:border-secondary-700
            rounded-md 
            bg-white dark:bg-secondary-900
            text-gray-900 dark:text-gray-200
            focus:ring-primary-500 focus:border-primary-500
          "
          placeholder="Enter product description"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="stockQuantity" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Stock Quantity
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Package className="text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              min="0"
              required
              className="
                w-full pl-10 pr-3 py-2 
                border border-gray-300 dark:border-secondary-700
                rounded-md 
                bg-white dark:bg-secondary-900
                text-gray-900 dark:text-gray-200
                focus:ring-primary-500 focus:border-primary-500
              "
              placeholder="Enter stock quantity"
            />
          </div>
        </div>

        <div>
          <label 
            htmlFor="status" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="discontinued">Discontinued</option>
          </select>
        </div>
      </div>

      <div>
        <label 
          htmlFor="imageUrl" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Product Image URL
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image className="text-gray-400 dark:text-gray-500" size={20} />
          </div>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="
              w-full pl-10 pr-3 py-2 
              border border-gray-300 dark:border-secondary-700
              rounded-md 
              bg-white dark:bg-secondary-900
              text-gray-900 dark:text-gray-200
              focus:ring-primary-500 focus:border-primary-500
            "
            placeholder="Enter image URL"
          />
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
          Save Product
        </button>
      </div>
    </form>
  )
}

export default ProductForm
