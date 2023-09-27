import { getTrandingMovies } from 'services/tmdbApi';
import { useEffect, useState } from 'react';
import { StyledLink, StyledList } from './HomePage.styled';
import { Loading } from 'components/Loading/Loading';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from 'components/Pagination/Pagination';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [trandingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(searchParams.get('page') ?? '1');

  const location = useLocation();

  useEffect(() => {
    setPage(searchParams.get('page') ?? '1');
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    getTrandingMovies('week', page)
      .then(responce => {
        setTrendingMovies(responce.data.results);
        setTotalPages(responce.data.total_pages);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <StyledList>
        {trandingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          );
        })}
      </StyledList>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default HomePage;
