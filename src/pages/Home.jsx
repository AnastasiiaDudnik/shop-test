import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProductList, addToCart } from 'services/productsAPI';
import { ListOfMovies } from './Home.styled';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductList()
      .then(({ data }) => setProductList(data))
      .catch(error => setError(error));
  }, []);

  const handleClick = id => {
    addToCart(id)
      .then(console.log('added to cart'))
      .catch(error => setError(error));
  };

  return (
    <>
      {error && <h1>{error.message}</h1>}

      <ListOfMovies>
        {productList.map(({ name, _id, color, price }) => (
          <li key={_id}>
            <Link to={`/${_id}`} state={{ from: location }}>
              {name}
            </Link>
            <p>{color}</p>
            <p>{price} UAH</p>
            <button type="button" onClick={() => handleClick(_id)}>
              Add to cart
            </button>
          </li>
        ))}
      </ListOfMovies>
    </>
  );
};

export default Home;
