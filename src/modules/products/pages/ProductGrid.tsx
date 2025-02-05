import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  PlusCircle 
} from 'lucide-react'
import SlidePanel from '../../../components/SlidePanel'
import ProductForm from '../components/ProductForm'

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Wireless Headphones',
      sku: 'WH-001',
      price: 99.99,
      category: 'Electronics',
      stockQuantity: 50,
      imageUrl: 'https://example.com/headphones.jpg',
      status: 'active'
    },
    {
      id: '2',
      name: 'Smart Watch',
      sku: 'SW-002',
      price: 199.99,
      category: 'Wearables',
      stockQuantity: 30,
      imageUrl: 'https://example.com/smartwatch.jpg',
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
          Product Grid
        </h1>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="
              bg-white dark:bg-secondary-800 
              rounded-lg 
              shadow-md 
              overflow-hidden
              hover:shadow-lg
              transition-shadow
            "
          >
            <div className="relative">
              <img 
                src={product.imageUrl || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                  onClick={() => {
                    setSelectedProduct(product)
                    setIsPanelOpen(true)
                  }}
                  className="
                    bg-blue-500 text-white 
                    p-2 rounded-full 
                    hover:bg-blue-600
                    transition-colors
                  "
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => handleDeleteProduct(product.id)}
                  className="
                    bg-red-500 text-white 
                    p-2 rounded-full 
                    hover:bg-red-600
                    transition-colors
                  "
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {product.name}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-primary-500 font-bold">
                  ${product.price.toFixed(2)}
                </span>
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
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>SKU: {product.sku}</span>
                <span className="ml-4">Stock: {product.stockQuantity}</span>
              </div>
            </div>
          </div>
        ))}
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

export default ProductGrid
