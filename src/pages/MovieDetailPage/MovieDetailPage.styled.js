import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  h1,
  p,
  h2,
  ul {
    margin: 0;
    margin-bottom: 15px;
  }
`;

export const OverviewContainer = styled.div`
  display: flex;
  & div {
    padding: 15px;
  }
`;

export const StyledGenres = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  gap: 10px;
`;

export const AdditionContainer = styled.div`
  padding: 15px;
  p {
    margin-top: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  padding-bottom: 10px;

  &.active {
    color: orange;
  }
  &:hover,
  &:focus {
    color: orange;
  }
`;
