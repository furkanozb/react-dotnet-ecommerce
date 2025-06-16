import { useEffect, useState } from 'react'
import type { IProduct } from '../model/IProduct'
import Header from './Header'
import ProductList from './ProductList'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5183/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  function addProduct() {
    setProducts([...products,
    { id: 9555,
      name: 'Product 5', 
      description: 'Description 5',
       price: 500,
       isActive: true, 
       imageUrl: 'https://via.placeholder.com/150', 
       createdAt: '0001-01-01T00:00:00', 
       updatedAt: null, 
       stock: 100 }])
  }

  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
    </>
  )
}

export default App
