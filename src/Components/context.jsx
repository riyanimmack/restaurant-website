import React, { createContext, useState } from 'react'

export const Cart = createContext();



function Context({children}) {

  const [cartItems ,setCartItems]=useState([]);
  

  return (
    <Cart.Provider value={{cartItems , setCartItems}}>
        {children}
    </Cart.Provider>
  )
}

export default Context