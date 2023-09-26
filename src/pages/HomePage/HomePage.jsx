import { getTrandingMovies } from 'services/tmdbApi';
import { useEffect, useState } from 'react';
import { StyledLink, StyledList } from './HomePage.styled';
import { Loading } from 'components/Loading/Loading';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trandingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    getTrandingMovies()
      .then(responce => {
        setTrendingMovies(responce.data.results);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
    </div>
  );
};

export default HomePage;
