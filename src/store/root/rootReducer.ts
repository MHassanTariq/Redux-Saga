import {combineReducers} from 'redux';
import errorReducer from '../shared/errorReducer';
import loadingReducer from '../shared/loadingReducer';
import todosReducer from '../todos/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  loadingState: loadingReducer,
  errorState: errorReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export default rootReducer;
