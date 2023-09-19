import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { getMovieSearch } from 'services/movieAPI';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { ListOfMovies } from './Home.styled';

const MovieSearch = () => {
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuerry = searchParams.get('searchQuerry') ?? '';
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuerry) {
      return;
    }

    getMovieSearch(searchQuerry)
      .then(({ results }) => setMovie(results))
      .catch(error => setError(error));
  }, [searchQuerry]);

  const updateQueryString = e => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuerry: searchValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuerry: form.elements.searchQuerry.value });

    form.reset();
  };

  return (
    <>
      <SearchBar
        value={searchQuerry}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {error && <h1>{error.message}</h1>}
      <ListOfMovies>
        {movie &&
          movie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ListOfMovies>
    </>
  );
};
export default MovieSearch;
