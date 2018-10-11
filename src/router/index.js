/* @flow */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from 'src/components/pages/Hello';
import TodoList from 'src/containers/TodoList';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route path="/hello" exact component={Hello} />
      <Route path="/todolist" exact component={TodoList} />
    </Switch>
  </BrowserRouter>
);
