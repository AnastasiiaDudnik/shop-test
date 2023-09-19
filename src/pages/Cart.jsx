import { useState, useEffect } from 'react';
import { getCart } from 'services/productsAPI';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCart()
      .then(({ data: { items } }) => setCart(items))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <li>{cart}</li>
    </>
  );
};

export default Cart;
