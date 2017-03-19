import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userReducer';
import rootSaga from './saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    userReducer,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}

