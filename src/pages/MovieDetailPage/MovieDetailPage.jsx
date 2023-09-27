import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/tmdbApi';
import {
  AdditionContainer,
  Container,
  OverviewContainer,
  StyledGenres,
  StyledLink,
} from './MovieDetailPage.styled';
import { getYear } from 'services/getFullYear';

import { Loading } from 'components/Loading/Loading';
import { getTmdbPhoto } from 'services/getPhoto';

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const [
    {
      title,
      release_date,
      poster_path,
      tagline,
      vote_average,
      overview,
      genres,
    },
    setMovieDetails,
  ] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(responce => {
        setMovieDetails(responce.data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return isLoading ? (
    <Loading />
  ) : (
    title && (
      <Container>
        <StyledLink to={location.state?.from ?? '/goit-react-hw-05-movies/'}>
          Go back
        </StyledLink>
        <OverviewContainer>
          <img src={getTmdbPhoto(poster_path)} alt={title} />
          <div>
            <h1>
              {title} ({getYear(release_date)})
            </h1>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <p>{tagline}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <StyledGenres>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </StyledGenres>
          </div>
        </OverviewContainer>
        <AdditionContainer>
          <p>Addition information</p>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink>
          <StyledLink to="review" state={location.state}>
            Review
          </StyledLink>
        </AdditionContainer>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    )
  );
};

export default MovieDetailPage;
