import { styled } from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  gap: 20px;
  li {
    width: 150px;
  }
  p {
    margin: 0;
  }
  span {
    font-style: italic;
  }
`;
