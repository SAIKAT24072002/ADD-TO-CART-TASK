import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import React from "react";

function ProductList({ addToCart }) {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

 return (

  <div className="bg-gray-100 min-h-screen py-10">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Products
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>

  </div>

);

}

export default ProductList