import { useState, useEffect } from 'react';
import { getCart } from 'services/cartAPI';
import { DeleteFromCartBtn } from 'components/DeleteFromCart/DeleteFromCartBtn';
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
  }, [cart]);

  // const { cart, error } = useCart();

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {cart ? (
        <ul>
          {cart.map(({ _id, name }) => (
            <li key={_id}>
              <p>{name}</p>
              <DeleteFromCartBtn id={_id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
};

export default Cart;
