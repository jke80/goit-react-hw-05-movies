import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage/HomePage';
import Layout from './Layout/Layout';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailPage from 'pages/MovieDetailPage/MovieDetailPage';
// import CastPage from 'pages/CastPage/CastPage';
// import ReviewPage from 'pages/ReviewPage/ReviewPage';

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
        <Route path="/jke80.github.io/" element={<Layout />}>
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
