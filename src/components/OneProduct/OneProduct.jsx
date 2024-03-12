import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from 'services/productsAPI';
import { AddToCartBtn } from 'components/AddToCart/AddToCartBtn';

export const OneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch(error => setError(error));
  }, [id]);

  const { name, price } = product;

  return (
    <>
      {error && <h1>{error.message}</h1>}

      <div>
        {product && (
          <div>
            <h1>{name}</h1>
            <p>Price: {price} UAH</p>
            <AddToCartBtn id={id} />
          </div>
        )}
      </div>
    </>
  );
};
