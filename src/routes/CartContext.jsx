import React, { createContext, useState } from 'react';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const addToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.product_id === item.product_id);
    if (itemExists) {
      toast.warn('Item already exists in your cart!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
      toast.success('Successfully added to Cart!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

  const addToWishlist = (item) => {
    const itemExists = wishItems.find((wishItem) => wishItem.product_id === item.product_id);
    if (itemExists) {
      toast.warn('Item already exists in wishlist!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      setWishItems((prevItems) => [...prevItems, item]);
      toast.success('Successfully added to Wishlist!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
    console.log(itemId)
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromWishlist = (itemId) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
    console.log(itemId)
  };

  return (
    <CartContext.Provider value={{ cartItems, wishItems, addToCart, addToWishlist, removeFromCart, removeFromWishlist, clearCart}}>
      {children}
      <ToastContainer></ToastContainer>
    </CartContext.Provider>
  ); 
};
