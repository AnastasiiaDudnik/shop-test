import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovie } from 'services/movieAPI';
import { Loader } from 'components/Loader/Loader';
import { GoBack } from 'components/GoBack/GoBack';
import { Wrapper } from './MovieDetails.styed';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovie(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => setError(error));
  }, [movieId]);

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movie;

  const userScore = Number.parseInt(vote_average * 10);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <GoBack to={goBackRef}>Go back</GoBack>
      <Wrapper>
        {movie && (
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {userScore}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.map(({ name, id }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        )}

        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
      </Wrapper>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
