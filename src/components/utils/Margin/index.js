/* @flow */
import styled from 'styled-components';

const Margin = styled.div`
  margin-top: ${({ top }) => top || 0}px;
  margin-right: ${({ right }) => right || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
  margin-left: ${({ left }) => left || 0}px;
`;

export default Margin;
