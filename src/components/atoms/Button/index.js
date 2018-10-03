import styled from 'styled-components';

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  display: ${({ wide }) => (wide ? 'block' : 'inline-block')};
  padding: 0.375rem 0.75rem;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  :active {
    opacity: 0.6;
  }
`;

export default Button;
