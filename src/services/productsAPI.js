import axios from 'axios';

axios.defaults.baseURL = 'https://sb-shop.onrender.com/';

export const getProductList = async () => {
  try {
    return await axios.get('products');
  } catch {}
};

export const getProduct = async id => {
  try {
    return await axios.get(`products/${id}`);
  } catch (error) {}
};

export const getCart = async () => {
  try {
    return await axios.get(`cart`);
  } catch (error) {}
};

export const addToCart = async id => {
  try {
    return await axios.post(`cart/${id}`);
  } catch (error) {}
};
