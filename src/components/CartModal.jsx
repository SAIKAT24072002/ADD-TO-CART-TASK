import React from "react"



function CartModal({ cart, removeFromCart, setShowModal }) {

    return (
  
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  
        <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-xl shadow-lg p-6">
  
          <div className="flex justify-between items-center mb-4">
  
            <h2 className="text-2xl font-bold text-indigo-600">
              Your Cart
            </h2>
  
            <button
              onClick={() => setShowModal(false)}
              className="text-red-500 font-semibold"
            >
              Close
            </button>
  
          </div>
  
          {cart.length === 0 ? (
  
            <p className="text-gray-500 text-center">
              No items in cart
            </p>
  
          ) : (
  
            cart.map(item => (
  
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
  
                <div className="flex items-center gap-4">
  
                  <img
                    src={item.image}
                    alt=""
                    className="h-12"
                  />
  
                  <p className="text-sm font-medium">
                    {item.title}
                  </p>
  
                </div>
  
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
  
              </div>
  
            ))
  
          )}
  
        </div>
  
      </div>
  
    )
  
  }
  
  export default CartModal