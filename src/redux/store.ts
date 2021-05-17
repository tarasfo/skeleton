import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore, compose} from 'redux';

import rootReducer from './root-reducer';
import sagas from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

let devTool: any = undefined;
if (typeof jest === 'undefined') {
  // @ts-ignore
  devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

// // @ts-ignore
// const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = devTool ? devTool : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// @ts-ignore
store.runSaga = sagaMiddleware.run;

// @ts-ignore
store.runSaga(sagas);