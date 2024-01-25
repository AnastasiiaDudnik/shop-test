import { useState, useEffect } from 'react';
import { getCart } from 'services/cartAPI';
// import { useCart } from 'services/cartContext';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCart()
      .then(({ data }) => {
        setCart(data);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {cart ? (
        <ul>
          {cart.map(({ _id, name }) => (
            <li key={_id}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
};

export default Cart;
