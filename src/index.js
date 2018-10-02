import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from 'src/App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Root = () => (
  <>
    <App />
    <GlobalStyle />
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
