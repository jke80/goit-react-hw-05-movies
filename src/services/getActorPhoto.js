export const getTmdbPhoto = path => {
  return path
    ? `https://image.tmdb.org/t/p/w300/${path}`
    : `https://placehold.co/300x450/jpg?text=NO+PHOTO`;
};
