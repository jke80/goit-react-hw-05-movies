import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #eee;
  padding: 15px;
  nav {
    display: flex;
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
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
