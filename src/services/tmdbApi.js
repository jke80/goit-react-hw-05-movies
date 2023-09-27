import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: URL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg0ZDQ5Zjg5YmQ3NDRjNWUwMTY3MzgwY2FlMjFmZCIsInN1YiI6IjY1MGRhNWI5NGRhM2Q0MDBlYWUzMTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4_cfwbulJAeuSyJDeI2tC5CtlbwpQRIT4sWdrQ9OdE',
  },
  method: 'get',
  params: { language: 'en-US' },
});

// timeWindow:day,week

export const getTrandingMovies = async (timeWindow = 'day', page = 1) => {
  const options = {
    params: {
      include_adult: true,
      page,
    },
  };
  const responce = await instance.get(`/trending/movie/${timeWindow}`, options);

  return responce;
};

export const getSearchMovies = async (query = '', page = 1) => {
  const options = {
    params: {
      query,
      include_adult: false,
      page,
    },
  };
  const responce = await instance.get(`/search/movie`, options);

  return responce;
};

export const getMovieDetails = async (movieId = 736074) => {
  const responce = await instance.get(`/movie/${movieId}`);

  return responce;
};

export const getMovieCredits = async (movieId = 736074) => {
  const responce = await instance.get(`/movie/${movieId}/credits`);

  return responce;
};

export const getMovieReviews = async (movieId = 736074, page = 1) => {
  const options = {
    params: {
      page,
    },
  };
  const responce = await instance.get(`/movie/${movieId}/reviews`, options);

  return responce;
};
