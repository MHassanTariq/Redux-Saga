import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root/rootReducer';
import {rootSaga} from './root/rootSaga';

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
  sagaMiddleWare.run(rootSaga);
  return store;
};
export default configureStore;
