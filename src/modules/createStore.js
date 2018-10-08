import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({});

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

export default store;
