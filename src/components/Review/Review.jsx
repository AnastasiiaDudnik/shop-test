import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/movieAPI';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReview(movieId)
      .then(({ results }) => setReview(results))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {review.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {review.length > 1 &&
        review.map(({ author, id, content }) => (
          <div key={id}>
            <h3> Author: {author}</h3>
            <p>{content}</p>
          </div>
        ))}
    </>
  );
};

export default Review;
