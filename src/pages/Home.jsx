import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProductList, getRecentlyViewed } from 'services/productsAPI';
import { ListOfMovies } from './Home.styled';
// import { useCart } from 'services/cartContext';
import { AddToCartBtn } from 'components/AddToCart/AddToCartBtn';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);
  // const { addToCart } = useCart();

  useEffect(() => {
    getProductList()
      .then(({ data }) => {
        setProductList(data);
      })
      .catch(error => setError(error));
  }, []);

  useEffect(() => {
    getRecentlyViewed()
      .then(({ data }) => {
        console.log(data);
        setRecentlyViewed(data);
      })
      .catch(error => setError(error));
  }, []);

  // const handleClick = id => {
  //   addToCart(id)
  //     .then(console.log('added to cart'))
  //     .catch(error => setError(error));
  // };

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
            <AddToCartBtn id={_id} />
          </li>
        ))}
      </ListOfMovies>

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
