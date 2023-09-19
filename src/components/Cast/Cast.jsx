import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movieAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => setError(error));
  }, [movieId]);

  // const {name, character, profile_path} = cast

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {cast &&
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={100}
                height={150}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
