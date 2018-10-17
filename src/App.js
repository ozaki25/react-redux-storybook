import React from 'react';
import { Provider } from 'react-redux';
import Router from 'src/router/';
import store from 'src/modules/createStore';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
