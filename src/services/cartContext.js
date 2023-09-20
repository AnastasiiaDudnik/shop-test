import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCart, addToCart as addToCartAPI } from './productsAPI';

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

  return (
    <CartContext.Provider value={{ cart, addToCart, error }}>
      {children}
    </CartContext.Provider>
  );
}
