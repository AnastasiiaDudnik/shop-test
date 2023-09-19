import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  border: 1px solid black;
  font: inherit;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  background-color: lightpink;
  border: 1px solid black;
  cursor: pointer;

  > span:hover {
    color: black;
  }
`;
