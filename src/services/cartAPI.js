import axios from 'axios';

// axios.defaults.baseURL = 'https://sb-shop.onrender.com/';
axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.withCredentials = true;

export const getCart = async () => {
  try {
    return await axios.get('cart');
  } catch {}
};
