import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getCart,
  addToCart as addToCartAPI,
  removeOneFromCart,
} from './cartAPI';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCart()
      .then(({ data: { items } }) => setCart(items))
      .catch(error => setError(error));
  }, []);

  const addToCart = async id => {
    await addToCartAPI(id);
    getCart()
      .then(({ data: { items } }) => setCart(items))
      .catch(error => setError(error));
  };

  const removeFromCart = async id => {
    await removeOneFromCart(id);
    getCart()
      .then(({ data: { items } }) => setCart(items))
      .catch(error => setError(error));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, error }}>
      {children}
    </CartContext.Provider>
  );
}
