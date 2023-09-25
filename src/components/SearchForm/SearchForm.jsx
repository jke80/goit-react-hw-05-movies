import React, { useEffect } from 'react';
import { StyledSearchForm } from './SerchForm.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';

  // useEffect(() => {
  //   console.log(location);
  //   const query = location.state?.from?.search || '';
  //   setSearchParams({ query });
  // }, [location, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);

    e.currentTarget.reset();
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={e => setSearchParams({ query: e.target.value })}
        value={value}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </StyledSearchForm>
  );
};

export default SearchForm;
