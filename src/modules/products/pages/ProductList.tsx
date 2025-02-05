import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  PlusCircle,
  Filter
} from 'lucide-react'
import SlidePanel from '../../../components/SlidePanel'
import ProductForm from '../components/ProductForm'

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Wireless Headphones',
      sku: 'WH-001',
      price: 99.99,
      category: 'Electronics',
      stockQuantity: 50,
      status: 'active'
    },
    {
      id: '2',
      name: 'Smart Watch',
      sku: 'SW-002',
      price: 199.99,
      category: 'Wearables',
      stockQuantity: 30,
      status: 'active'
    }
  ])

  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleAddProduct = (productData: any) => {
    const newProduct = {
      ...productData,
      id: String(products.length + 1)
    }
    setProducts([...products, newProduct])
    setIsPanelOpen(false)
  }

  const handleEditProduct = (productData: any) => {
    const updatedProducts = products.map(prod => 
      prod.id === selectedProduct.id ? { ...prod, ...productData } : prod
    )
    setProducts(updatedProducts)
    setIsPanelOpen(false)
    setSelectedProduct(null)
  }

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(prod => prod.id !== productId))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Product Management
        </h1>
        <div className="flex space-x-4">
          <button 
            className="
              bg-gray-100 dark:bg-secondary-800 
              text-gray-700 dark:text-gray-300
              px-4 py-2 
              rounded-lg 
              hover:bg-gray-200 dark:hover:bg-secondary-700
              flex items-center space-x-2
            "
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
          <button 
            onClick={() => {
              setSelectedProduct(null)
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
            <PlusCircle size={16} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-secondary-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">SKU</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr 
                key={product.id} 
                className="border-b dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-700"
              >
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.sku}</td>
                <td className="p-3">${product.price.toFixed(2)}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs
                    ${product.stockQuantity <= 10 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
                      product.stockQuantity <= 20
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}
                  `}>
                    {product.stockQuantity}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded text-xs uppercase
                    ${product.status === 'active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      product.status === 'inactive'
                      ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                  `}>
                    {product.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <div className="flex justify-end space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedProduct(product)
                        setIsPanelOpen(true)
                      }}
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Edit size={20} />
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
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
        title={selectedProduct ? "Edit Product" : "Add New Product"}
        size="wide"
      >
        <ProductForm 
          onSubmit={selectedProduct ? handleEditProduct : handleAddProduct}
          initialData={selectedProduct}
        />
      </SlidePanel>
    </div>
  )
}

export default ProductList
