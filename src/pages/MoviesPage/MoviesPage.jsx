import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { StyledLink, StyledList } from './MoviesPage.styled';
import { getSearchMovies } from 'services/tmdbApi';
import { Loading } from 'components/Loading/Loading';

const MoviesPage = () => {
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [queryString, setQueryString] = useState(() => {
    return searchParams.get('query') ?? '';
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSearch = query => {
    setQueryString(query);
  };

  useEffect(() => {
    if (!queryString) {
      return;
    }
    setIsLoading(true);
    getSearchMovies(queryString)
      .then(responce => {
        setSearchMovies(responce.data.results);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [queryString]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmitSearch} />
      {isLoading ? (
        <Loading />
      ) : (
        <StyledList>
          {searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <StyledLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </StyledLink>
              </li>
            );
          })}
        </StyledList>
      )}
    </div>
  );
};

export default MoviesPage;
