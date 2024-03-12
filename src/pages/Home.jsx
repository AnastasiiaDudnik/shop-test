import { ProductList } from 'components/ProductList/ProductList';
import { RecentlyViewed } from 'components/RecenlyViewed/RecentlyViewed';

const Home = () => {
  return (
    <>
      <ProductList />
      <RecentlyViewed />
    </>
  );
};

export default Home;
