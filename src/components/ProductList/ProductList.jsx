import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProductList } from 'services/productsAPI';
import { ListOfProducts } from './ProductList.styled';
import { AddToCartBtn } from 'components/AddToCart/AddToCartBtn';

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductList()
      .then(({ data }) => {
        setProductList(data);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ListOfProducts>
        {productList.map(({ name, _id, color, price }) => (
          <li key={_id}>
            <Link to={`/${_id}`} state={{ from: location }}>
              {name}
            </Link>
            <p>{color}</p>
            <p>{price} UAH</p>
            <AddToCartBtn id={_id} />
          </li>
        ))}
      </ListOfProducts>
    </>
  );
};
