import React, { useState } from 'react';
import { StyledSearchForm } from './SerchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const setSearchParams = useSearchParams('')[1];
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.length) return;
    setSearchParams({ query: value });
    setValue('');
    e.currentTarget.reset();
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </StyledSearchForm>
  );
};

export default SearchForm;
