import React from 'react';
import styled from 'styled-components';
import Title from 'src/components/atoms/Title';

const App = () => (
  <Container>
    <Title>HelloWorld</Title>
  </Container>
);

const Container = styled.div`
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 15px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default App;
