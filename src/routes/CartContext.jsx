import React, { createContext, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const addToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.product_id === item.product_id);
    if (itemExists) {
      alert("Item already exists in the cart");
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const addToWishlist = (item) => {
    const itemExists = wishItems.find((wishItem) => wishItem.product_id === item.product_id);
    if (itemExists) {
      alert("Item already exists in the Wishlist");
    } else {
      setWishItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
    console.log(itemId)
  };

  const removeFromWishlist = (itemId) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
    console.log(itemId)
  };

  return (
    <CartContext.Provider value={{ cartItems, wishItems, addToCart, addToWishlist, removeFromCart, removeFromWishlist}}>
      {children}
    </CartContext.Provider>
  ); 
};
