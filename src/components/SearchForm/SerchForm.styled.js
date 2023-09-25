import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  margin-top: 15px;
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    display: inline-block;
    padding: 4px;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    font: inherit;
  }

  button:hover {
    opacity: 1;
    color: orange;
  }

  input {
    display: inline-block;
    width: 30ch;
    font: inherit;

    padding: 4px;
  }
`;
