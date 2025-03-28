import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #ec5288;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e14e77;
  }
`;

const Button = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
