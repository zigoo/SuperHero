import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import characters from './redux/charactersReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistMiddleware } from './redux/persistMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

const middlewares = [thunk, persistMiddleware];

const enhancer = compose(
  applyMiddleware(...middlewares),
  composeWithDevTools()
);

const store = createStore(characters, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
