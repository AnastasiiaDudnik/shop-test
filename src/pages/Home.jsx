import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRecentlyViewed } from 'services/productsAPI';
import { ListOfMovies } from './Home.styled';
import { AddToCartBtn } from 'components/AddToCart/AddToCartBtn';
import { ProductList } from 'components/ProductList/ProductList';

const Home = () => {
  const [recentlyViewed, setRecentlyViewed] = useState(null);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecentlyViewed()
      .then(({ data }) => {
        setRecentlyViewed(data);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <ProductList />

      {recentlyViewed && (
        <>
          <h2> Your recenly viewed products</h2>
          <ListOfMovies>
            <li key={recentlyViewed._id}>
              <Link to={`/${recentlyViewed._id}`} state={{ from: location }}>
                {recentlyViewed.name}
              </Link>
              <p>{recentlyViewed.color}</p>
              <p>{recentlyViewed.price} UAH</p>
              <AddToCartBtn id={recentlyViewed._id} />
            </li>
          </ListOfMovies>
        </>
      )}
    </>
  );
};

export default Home;
