import axios from 'axios';

// axios.defaults.baseURL = 'https://sb-shop.onrender.com/';
axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.withCredentials = true;

export const getCart = async () => {
  try {
    return await axios.get('cart');
  } catch {}
};

export const addToCart = async id => {
  try {
    return await axios.post(`cart/${id}`);
  } catch (error) {}
};

export const removeOneFromCart = async id => {
  try {
    return await axios.delete(`cart/${id}`);
  } catch {}
};
