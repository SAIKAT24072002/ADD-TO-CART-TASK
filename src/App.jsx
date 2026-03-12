import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import React from "react";
function App() {

  const [cart, setCart] = useState([])
  const [showModal, setShowModal] = useState(false)

  const addToCart = (product) => {

    const exists = cart.find(item => item.id === product.id)

    if(exists){
      alert("Item already added to the cart")
    }
    else{
      setCart([...cart, product])
    }

  }

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(item => item.id !== id)

    setCart(updatedCart)

  }

  return (

    <div>

      <Navbar cartCount={cart.length} setShowModal={setShowModal} />

      <ProductList addToCart={addToCart} />

      {showModal && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          setShowModal={setShowModal}
        />
      )}

    </div>

  )
}

export default App