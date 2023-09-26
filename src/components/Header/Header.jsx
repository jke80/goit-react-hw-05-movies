import React from 'react';
import { StyledHeader, StyledNavLink } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/goit-react-hw-05-movies" end>
          Home
        </StyledNavLink>
        <StyledNavLink
          state={{ from: location }}
          to="/goit-react-hw-05-movies/movies"
        >
          Movies
        </StyledNavLink>
      </nav>
    </StyledHeader>
  );
};
