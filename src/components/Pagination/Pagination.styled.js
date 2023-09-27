const { styled } = require('styled-components');

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  p {
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  display: inline-block;
  padding: 4px;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font: inherit;
  &:hover {
    opacity: 1;
    color: orange;
  }
`;
