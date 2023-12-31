import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailPage = lazy(() =>
  import('../pages/MovieDetailPage/MovieDetailPage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewPage = lazy(() => import('../pages/ReviewPage/ReviewPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="review" element={<ReviewPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
