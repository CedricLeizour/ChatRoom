/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import logMiddleware from 'src/middleware/log';
import authMiddleware from 'src/middleware/auth';
import socketMiddleware from 'src/middleware/socket';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      logMiddleware,
      authMiddleware,
      socketMiddleware,
    ),
  ),
);

export default store;
