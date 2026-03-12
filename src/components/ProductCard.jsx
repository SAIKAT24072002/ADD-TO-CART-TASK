import React from "react"



function ProductCard({ product, addToCart }) {

    return (
  
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
  
        <div className="flex justify-center">
  
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain"
          />
  
        </div>
  
        <h2 className="text-sm font-semibold mt-3 line-clamp-2">
          {product.title}
        </h2>
  
        <p className="text-indigo-600 text-lg font-bold mt-2">
          ${product.price}
        </p>
  
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
  
      </div>
  
    )
  
  }
  
  export default ProductCard