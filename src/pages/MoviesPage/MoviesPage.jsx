import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { StyledLink, StyledList } from './MoviesPage.styled';
import { getSearchMovies } from 'services/tmdbApi';
import { Loading } from 'components/Loading/Loading';
import { Pagination } from 'components/Pagination/Pagination';

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [queryString, setQueryString] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setQueryString(searchParams.get('query') ?? '');
    setPage(searchParams.get('page') ?? 1);
  }, [searchParams]);

  useEffect(() => {
    if (!queryString) {
      setSearchMovies([]);
      return;
    }
    setIsLoading(true);
    getSearchMovies(queryString, page)
      .then(responce => {
        console.log(responce);
        setSearchMovies(responce.data.results);
        setTotalPages(responce.data.total_pages);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [queryString, page]);

  return (
    <div>
      <SearchForm />
      {isLoading ? (
        <Loading />
      ) : (
        !!searchMovies.length && (
          <div>
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
            <Pagination totalPages={totalPages} />
          </div>
        )
      )}
    </div>
  );
};

export default MoviesPage;
