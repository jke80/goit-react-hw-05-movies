import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: orange;
  }
`;
