import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import todoList from 'src/modules/todoList';

const middleware = [thunk];

const reducer = combineReducers({ todoList });

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

export default store;
