import React from 'react';

import { StyledHeader, StyledNavLink } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/jke80.github.io">Home</StyledNavLink>
        <StyledNavLink to="/jke80.github.io/movies" state={{ from: location }}>
          Movies
        </StyledNavLink>
      </nav>
    </StyledHeader>
  );
};
