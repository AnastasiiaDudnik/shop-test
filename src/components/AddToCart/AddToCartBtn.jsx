import { useState } from 'react';
import { useCart } from 'services/cartContext';

export const AddToCartBtn = ({ id }) => {
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const handleClick = id => {
    addToCart(id)
      .then(console.log('added to cart'))
      .catch(error => setError(error));
  };

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <button type="button" onClick={() => handleClick(id)}>
        Add to cart
      </button>
    </>
  );
};
