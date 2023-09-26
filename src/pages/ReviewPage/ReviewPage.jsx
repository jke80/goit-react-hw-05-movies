import { Loading } from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTmdbPhoto } from 'services/getPhoto';
import { getMovieReviews } from 'services/tmdbApi';
import { StyledList } from './ReviewPage.styled';

const ReviewPage = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(responce => {
        setReviews(responce.data.results);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <StyledList>
        {reviews.length ? (
          reviews.map(item => {
            return (
              <li key={item.id}>
                <div>
                  <img
                    width={150}
                    src={getTmdbPhoto(item.author_details.avatar_path)}
                    alt={item.author}
                  />
                  <p>{item.author}</p>
                </div>

                <p>{item.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie. 😒</p>
        )}
      </StyledList>
    </div>
  );
};

export default ReviewPage;
