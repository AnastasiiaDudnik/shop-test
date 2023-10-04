import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getProduct } from 'services/productsAPI';
import { Loader } from 'components/Loader/Loader';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(({ data }) => setProduct(data.result))
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
          </div>
        )}
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Product;
