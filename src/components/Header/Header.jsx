import React from 'react';

import { StyledHeader, StyledNavLink } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies" state={{ from: location }}>
          Movies
        </StyledNavLink>
      </nav>
    </StyledHeader>
  );
};
