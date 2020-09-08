import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import RootRedducer from './RootReducer';

const middlewares = [logger];

const store = createStore(RootRedducer, applyMiddleware(...middlewares));

export default store;
