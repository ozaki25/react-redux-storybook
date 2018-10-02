import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lavender;
  height: 100vh;
  padding: 10px 15px;
`;

const H1 = styled.h1`
  font-size: 36px;
  color: red;
`;

const App = () => (
  <Container>
    <H1>Hello</H1>
  </Container>
);

export default App;
