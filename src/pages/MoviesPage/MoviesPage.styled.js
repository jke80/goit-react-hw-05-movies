import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
  &:hover,
  &:focus {
    color: orange;
  }
`;
