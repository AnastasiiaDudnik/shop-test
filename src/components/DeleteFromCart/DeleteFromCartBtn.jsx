import { useState } from 'react';
import { useCart } from 'services/cartContext';

export const DeleteFromCartBtn = ({ id }) => {
  const [error, setError] = useState(null);
  const { removeFromCart } = useCart();

  const handleClick = id => {
    removeFromCart(id)
      .then(console.log(`${id} removed from cart`))
      .catch(error => setError(error));
  };

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <button type="button" onClick={() => handleClick(id)}>
        Remove
      </button>
    </>
  );
};
