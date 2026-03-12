import React from "react"


function Navbar({ cartCount, setShowModal }) {

    return (
  
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
  
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
  
          <h1 className="text-2xl font-bold tracking-wide">
            Saikat Store
          </h1>
  
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            🛒 Cart ({cartCount})
          </button>
  
        </div>
  
      </div>
  
    )
  }
  
  export default Navbar