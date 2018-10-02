import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from 'src/App';

// eslint-disable-next-line no-unused-expressions
createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
