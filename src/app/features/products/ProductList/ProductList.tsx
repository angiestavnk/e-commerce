"use client"
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { fetchProducts, Product } from "../products-api"

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const loadProducts = async () => {
      const result = await fetchProducts()

      setProducts(result)
    }
    loadProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList