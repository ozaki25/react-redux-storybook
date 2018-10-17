import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: ${({ wide }) => (wide ? 'block' : 'inline-block')};
  margin: 0;
  outline: none;
  padding: 0.375rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  :active {
    opacity: 0.4;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;
