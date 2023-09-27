import { Loading } from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/tmdbApi';
import { StyledList } from './CastPage.styled';
import { getTmdbPhoto } from 'services/getPhoto';

const CastPage = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(responce => {
        setCast(responce.data.cast);
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
        {cast.length ? (
          cast.map(item => {
            return (
              <li key={item.id}>
                <img
                  width={150}
                  src={getTmdbPhoto(item.profile_path)}
                  alt={item.name}
                />
                <p>
                  Name: <span>{item.name}</span>
                </p>
                <p>
                  Character: <span>{item.character}</span>
                </p>
              </li>
            );
          })
        ) : (
          <p>We don't have any information about cast of this movie 😒 </p>
        )}
      </StyledList>
    </div>
  );
};

export default CastPage;
